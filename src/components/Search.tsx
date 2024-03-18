"use client"
import Link from 'next/link';
import { Artist } from '@/utils/Artist';
import { useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState("")
  return (
    <div className="flex items-center gap-3 w-[350px] h-12 px-3 relative">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-[#272727] p-2 rounded-lg w-full placeholder:text-[#d3d3d3]"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col top-0 mt-12 ml-3 p-2 absolute max-h-[40vh] rounded bg-[#131313] w-[300px] overflow-x-hidden z-[100%]">
        {
            Artist && (
                Artist.filter((artist) => {
                    if (search == ""){
                        return artist
                    } else if (artist.name.toLowerCase().includes(search.toLowerCase())) {
                        return artist;
                    }
                }).map(artist => {

              return  <Link className='hover:text-slate-400' key={artist.id} href={"/"}>{artist.name}</Link>
            })
            )
        }
        
      </div>
    </div>
  );
}
