"use client";

import Image from "next/image";


export default function Loading() {
  return (
    <div className="flex justify-center items-start lg:items-center w-full text-black">
        <div className=" bg-[#fefefe] flex flex-col mt-20 justify-center items-center w-full lg:w-1/2  rounded-lg p-10">
            <Image 
                src="/gifs/Loading.gif" 
                alt="Loading..." 
                width={100} 
                height={100} 
                priority
            />
        </div>
    </div>
  );
}