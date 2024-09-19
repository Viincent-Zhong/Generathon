'use client'

import Image from "next/image"
import { useState, useRef } from "react"
import { useRouter } from 'next/navigation'

import useOutsideClick from "../useOutsideClick"
import { GeneratorLinks } from "./header"

interface Props {
    generators : GeneratorLinks[];
}

export default function SearchBarComponent({generators}: Props) {
    const resultRef = useRef(null);
    const [searching, setSearching] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [results, setResults] = useState<GeneratorLinks[]>([]);
    const router = useRouter();

    useOutsideClick({ref: resultRef, handleClickOutside: () => {
        if (!searching) {
            setSearching(false);
            setText("");
            setResults([]);
        }
    }});

    const handleSearch = (e: string) => {
        setText(e);
        if (e === "") {
            setResults([]);
            return;
        }
        setResults(generators.filter(item => item.title.toLowerCase().includes(e.toLowerCase())))
    }

    return (
        <div className="ml-4  h-full w-[20%] p-2 rounded-xl">
            <div className="h-full w-full rounded-xl bg-zinc-100 hover:bg-zinc-300 grid grid-rows-1 grid-cols-6" onClick={() => {setSearching(true)}}>
            {/* Search logo */}
            <div className="relative row-start-1 col-start-1 row-span-1 col-span-1">
                <Image src="/images/search.png" fill={true} sizes={"h-full w-full"} alt=" "/>
            </div>
            <div className="row-start-1 col-start-1 row-span-1 col-span-6">
                <input value={text} onChange={(e) => {handleSearch(e.target.value)}} style={{paddingLeft: '16%'}} className="text-2xl text-slate-700 font-medium h-full w-full bg-zinc-100 hover:bg-zinc-300 rounded-xl" placeholder="Search..."></input>
            </div>
            </div>
            {/* Result */}
            { searching && results.length >= 1 &&
            <div ref={resultRef} className=" p-6 w-full bg-zinc-100 rounded-b-xl">
                <ul>
                    {results.map((item) => {
                        return (
                            <li key={item.id} className="p-6 text-slate-700 text-3xl cursor-pointer w-full hover:bg-zinc-300 rounded-xl">
                                <p onClick={() => {router.push(item.pageUrl)}}>{item.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            }
        </div>
    )
}