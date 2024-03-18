import Image from "next/image";
import Link from "next/link";

interface Props {
    title:string;
    data:any[];
}

const RenderRows = ({title, data}:Props) => {
  return (
    <div className="w-full flex flex-col md:gap-4 gap-6 px-2">
        <div className="w-full flex items-center justify-between">
            <span className="font-semibold text-[20px]">{title }</span>
            <Link href={"#"} className="text-[#1ed760] text-[13.5px] font-medium">
                See more
            </Link>
        </div>
        <div className="w-full flex items-center justify-between gap-8 overflow-x-auto md:pb-0 pb-5">
            {
                data.map((song:any) => {
                    return (
                      <div
                        key={song.title}
                        className="flex items-center flex-col gap-[6px] cursor-pointer w-[500px] rounded-sm bg-[#1f1f1f] p-1  hover:bg-[#3b3b3b] transition-all ease-linear"
                      >
                        <div className="rounded-xl w-[145px] h-[145px] relative">
                          <Image
                            src={song.cover}
                            className=" rounded-sm w-full"
                            fill
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-1 self-start md:ml-[22px] ml-2">
                          <span className="font-semibold text-[#b3b3b3]">
                            {song.title}
                          </span>
                          <span className=" text-[#b3b3b3]">{song.singer}</span>
                        </div>
                      </div>
                    ); // TODO: Implement this
                })
            }
        </div>
    </div>
  )
}

export default RenderRows