'use client'

import { useState } from "react";
import Image from "next/image";

interface Props {
    handleSearch: (search: string) => void;
}

export default function Search({handleSearch}: Props) {
    const [search, setSearch] = useState<string>('');

    const searchBooks = () => {
        handleSearch(search.replace(/\s/g, '+'));
        setSearch('');
    }

    return (
        <>
            {/* Clear */}
            <div className="pl-2 flex items-center h-full row-start-1 col-start-1 row-span-1 col-span-1 cursor-pointer" onClick={() => {setSearch('')}}>
                <h1 className="text-3xl font-thin"> Clear </h1>
            </div>
            {/* Search */}
            <div className="row-start-1 col-start-2 row-span-1 col-span-7 h-full">
                <div className="grid grid-rows-1 grid-cols-8 h-full">
                    {/* Text */}
                    <div className="row-start-1 col-start-1 row-span-1 col-span-8 py-2 bg-gradient-to-r from-slate-100 to-slate-200">
                        <input value={search} onChange={(e) => {setSearch(e.target.value)}} style={{paddingLeft: '5%'}} className="outline-none h-full w-full text-3xl font-mono" placeholder='...'></input>
                    </div>
                    {/* Button */}
                    <div className="relative row-start-1 col-start-8 row-span-1 col-span-1 z-10 cursor-pointer" onClick={() => {searchBooks()}}>
                        <Image src="/images/search.png" fill={true} sizes={"h-full w-full"} alt=" "/>
                    </div>
                </div>
            </div>
        </>
    )
}