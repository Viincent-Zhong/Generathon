'use client'

import { useAppSelector } from "../../lib/hooks"

export default function CounterDisplayComponent () {
    const counter = useAppSelector((state) => state.counter.value); // Return Root State Slices

    return (
        <div className="animate-bounce h-full w-full flex flex-col items-center pt-2 bg-amber-100 rounded-full">
            <div className="rounded-md mt-2">
                <p className="text-xl text-black">Generated</p>
            </div>
            <div className="rounded-md bg-amber-50 w-28 h-12 mt-2 flex justify-center items-center">
                <p className="text-green-500 font-bold text-3xl font-serif">{counter}</p>
            </div>
        </div>
    )
}