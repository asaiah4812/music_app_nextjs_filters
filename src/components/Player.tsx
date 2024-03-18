"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cover from "/public/images (26).jpeg";
import {
  IoPauseCircle,
  IoPlayBack,
  IoPlayCircle,
  IoPlayForward,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";

const Player = () => {
  const [volume, setVolume] = useState("70");
  const [play, setPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const totalDuration = 206;

  useEffect(() => {
    let internalId: any;

    if (play) {
      internalId = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= totalDuration) {
            clearInterval(internalId);
            setPlay(false);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(internalId);
    }
    return () => clearInterval(internalId);
  }, [play, totalDuration, isDragging]);

  const progressBarWidth = (currentTime / totalDuration) * 100;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressBarClick = (e: any) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientx - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const clickedTime = (clickPosition / progressBarWidth) * totalDuration;
    setCurrentTime(clickedTime);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: any) => {
    if (isDragging && !play) {
      const progressBar = e.currentTarget;
      const clickPosition = e.client - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.offsetWidth;
      const clickedTime = (clickPosition / progressBarWidth) * totalDuration;
      setCurrentTime(clickedTime);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full fixed bottom-0 bg-[#000] h-20 md:py-[44px] py-2 px-5 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <Image src={cover} className="rounded-md w-[65px]" alt="music" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] font-medium opacity-85">Night Wolf</span>
          <span className="text-[13px] text-[#b3b3b3]">The villians</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 w-full">
          <IoPlayBack className="text-[#b2b2b2] w-[27px] h-[27px] cursor-pointer" />
          {!play ? (
            <IoPlayCircle
              className="text-[#b2b2b2] w-[45px] h-[45px] cursor-pointer"
              onClick={() => setPlay(true)}
            />
          ) : (
            <IoPauseCircle
              className="text-[#b2b2b2] w-[45px] h-[45px] cursor-pointer"
              onClick={() => setPlay(false)}
            />
          )}
          <IoPlayForward className="text-[#b2b2b2] w-[27px] h-[27px] cursor-pointer" />
          <div className="flex items-center w-full gap-2">
            <span className="text-[#b3b3b3] text-[14px] font-medium md:block hidden">
              {formatTime(currentTime)}
            </span>
            <div
              className="md:w-[950px] w-[110px] bg-[#4d4d4d] rounded-md h-[6px] relative cursor-pointer"
              onMouseDown={handleDragStart}
              onClick={handleProgressBarClick}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              <div
                className="absolute left-0 top-0 h-full bg-[#1ed760] rounded-md"
                style={{ width: `${progressBarWidth}` }}
              ></div>
            </div>
            <span className="text-[#b3b3b3] text-[14px] font-medium md:block hidden">
              {formatTime(totalDuration)}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3">
        {volume === "0" ? (
          <IoVolumeMuteOutline
            className="text-[#b3b3b3] w-[25px] h-[25px] cursor-pointer"
            onClick={() => setVolume("100")}
          />
        ) : (
          <IoVolumeMediumOutline
            className="text-[#b3b3b3] w-[25px] h-[25px] cursor-pointer"
            onClick={() => setVolume("0")}
          />
        )}
        <input
          type="range"
          min="0"
          max="100"
          className="accent-[#1ed768]"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Player;
