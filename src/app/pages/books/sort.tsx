'use client'

import { useImperativeHandle, forwardRef, useState, useRef } from "react";
import useOutsideClick from "../../components/useOutsideClick";

type sortOption = {
    id: number,
    name: string,
    value: string
}

const sortOptions: sortOption[] = [
    {id: 1, name: 'By rating ascending', value: 'rating+asc'},
    {id: 2, name: 'By rating descending', value: 'rating'},
    {id: 3, name: 'Publish date ascending', value: 'old'},
    {id: 4, name: 'Publish date descending', value: 'new'},
]


export default forwardRef(function Sort(_, ref) {
    const [sorting, setSorting] = useState(false);
    const sortRef = useRef(null);
    const [highlight, setHighlight] = useState(0);

    useOutsideClick({ref: sortRef, handleClickOutside: () => { if (!sorting) setSorting(false); }});

    useImperativeHandle(ref, () => ({
        getSorts: () => {
            if (highlight === 0)
                return '';
            return '&sort=' + sortOptions[highlight - 1].value;
        }
    }));

    return (
        <div className="relative flex items-center h-full w-full" onClick={() => {setSorting(true)}}>
            <h1 className="text-3xl font-thin w-full cursor-pointer">Sort</h1>
            { sorting &&
                <ul className="absolute -ml-1 top-20 w-[100% + 0.25] bg-slate-300 max-h-96 overflow-y-auto" ref={sortRef}>
                    { sortOptions.map((option) => {
                        return (
                        <li key={option.id} className={"w-full mt-4 rounded-xl cursor-pointer " + (option.id === highlight ? "bg-slate-400" : "")}
                        onClick={() => {
                            if (option.id === highlight) {
                                setHighlight(0);
                                return;
                            }
                            setHighlight(option.id)}
                        }>
                            <p className="cursor-pointer text-center text-3xl font-thin p-2">{option.name}</p>
                        </li>
                    )})}
                </ul>
            }
        </div>
    )
})