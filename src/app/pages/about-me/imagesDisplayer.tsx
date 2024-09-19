'use client'

import Image from "next/image"
import { useState } from 'react'

interface ImagesDisplayerProps {
    imgUrls : string[];
}

export default function ImagesDisplayer({imgUrls} : ImagesDisplayerProps) {
    const length = imgUrls.length;
    const [imgId, setImgId] = useState(0);

    const changeImg = (direction : number) => {
        const newId = imgId + direction;
        if (newId <= -1 || newId >= length + 1) return;
        else setImgId(newId);
    }

    return (
        <div className="h-full w-full grid grid-rows-4 grid-cols-4">
            {/* Scroll left */}
            <div className="row-start-1 col-start-1 row-span-3 col-span-1 cursor-pointer z-10" onClick={() => {changeImg(-1)}}></div>
            {/* Scroll right */}
            <div className="row-start-1 col-start-4 row-span-3 col-span-1 cursor-pointer z-10" onClick={() => {changeImg(1)}}></div>
            {/* Left */}
            <div className="relative row-start-2 col-start-1 row-span-2 col-span-2 opacity-50 mr-4">
                {imgId >= 0 && <Image className="rounded-xl shadow-inner" src={imgUrls[imgId - 1]} sizes={"h-full w-full"} fill={true} alt=" "/>}
            </div>
            {/* Right */}
            <div className="relative row-start-2 col-start-3 row-span-2 col-span-2 opacity-50 ml-4">
                {imgId <= length + 1 && <Image className="rounded-xl shadow-inner" sizes={"h-full w-full"} src={imgUrls[imgId + 1]} fill={true} alt=" "/>}
            </div>
            {/* Middle */}
            <div className="relative row-start-1 col-start-2 row-span-3 col-span-2 mb-6">
                <Image className="rounded-xl shadow-inner" src={imgUrls[imgId]} sizes={"h-full w-full"} fill={true} alt=" "/>
            </div>
        </div>
    )
}