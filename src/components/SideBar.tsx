import { SaveAlbums } from "@/utils/savedAldum"
import Image from "next/image"
import { IoAlbums, IoBookmarksOutline, IoHeartOutline, IoHomeOutline, IoLibraryOutline, IoRemoveCircleOutline } from "react-icons/io5"
import { RiAddCircleLine } from "react-icons/ri"

const SideBar = () => {
    const sidebarItems =[
        {title: "Home", icon:  <IoHomeOutline/>, color:"#b3b3b3",  link:"/"},
        {title: "Library", icon:  <IoLibraryOutline/>, color:"#b3b3b3",  link:"/"},
        {title: "Liked Songs", icon:  <IoHeartOutline/>, color:"#b3b3b3",  link:"/"},
    ]
  return (
    <div className="md:h-screen h-fit md:w-[350px] w-full bg-[#121212] md:absolute block md:left-0 top-0 p-5 z-30">
        <div className="w-full flex flex-col gap-7 md:px-0 px-3">
            {sidebarItems.map((item, key) => {
                return <div key={key} className="flex items-center gap-3 cursor-pointer text-white ">{item.icon}
                <span className="font-medium text-[#b3b3b3] text-[14.5px]">{item.title}</span>
                </div>
            })}
        </div>
        <hr className="border-[#b3b3b3] m-7 opacity-30"/>
        <div className="w-full flex flex-col gap-7 md:px-0 px-3">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <IoBookmarksOutline color="#b3b3b3"/>
                    <span className="font-medium text-[#b3b3b3] text-[14px]">Saved Albums</span>
                </div>
                <RiAddCircleLine
                    width={"22px"}
                    height={"22px"}
                    className="cursor-pointer"
                    color={"#b3b3b3"}
                />
            </div>
            {
                SaveAlbums.map(album => {
                    return <div
                     key={album.id}
                     className="w-full flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                       <Image 
                       width={50}
                       height={50}
                       src={album.cover}
                       alt="cover"
                       />
                       <div className="flex flex-col justify-center items-start ">
                        <span className="font-medium text-[#b3b3b3] text-[15px]">
                            {album.title}
                        </span>
                        <span className="font-medium text-[#b3b3b3] text-[13px]" >
                            {album.likes} Likes
                        </span>
                       </div>

                        </div>
                        <IoRemoveCircleOutline
                            width={"22px"}
                            height={"22px"}
                            className="cursor-pointer text-[#b3b3b3]"
                        />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default SideBar