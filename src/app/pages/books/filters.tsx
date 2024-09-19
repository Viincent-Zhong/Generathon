'use client'

import { useImperativeHandle, forwardRef, useState, useRef } from "react";
import useOutsideClick from "../../components/useOutsideClick";

export default forwardRef(function Filters(_, ref) {
    // Default limit of 1 books returned
    const [limit, setLimit] = useState(1);
    const [filtering, setFiltering] = useState(false);
    const filterRef = useRef(null);

    useOutsideClick({ref: filterRef, handleClickOutside: () => { if (!filtering) setFiltering(false);}});

    useImperativeHandle(ref, () => ({
        getFilters: () => {
            return '&limit=' + limit;
        }
    }));

    return (
        <div className="relative flex items-center h-full w-full" onClick={() => {setFiltering(true)}}>
            <h1 className="text-3xl font-thin cursor-pointer w-full">Filters</h1>
            { filtering &&
                <ul className="absolute top-20 w-full bg-slate-300 pt-2" ref={filterRef}>
                    {/* Limit filter */}
                    <li className="flex flex-row w-full p-1">
                        <h1 className="cursor-pointer select-none text-center lg:text-4xl rounded-full hover:bg-slate-500 w-[20%]"
                            onClick={() => {if (limit > 1) setLimit(limit - 1)}}>-</h1>
                        <h1 className="select-none text-center lg:text-3xl w-[60%]">Limit<br/> {limit}</h1>
                        <h1 className="cursor-pointer select-none text-center lg:text-4xl rounded-full hover:bg-slate-500 w-[20%]" 
                            onClick={() => {setLimit(limit + 1)}}>+</h1>
                    </li>
                </ul>
            }
        </div>
    )
})