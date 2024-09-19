'use client'

import { useEffect, useRef } from "react"

interface ScrollerProps {
    direction: number;
    id: string;
}

export default function Scroller({direction, id}: ScrollerProps) {
    // const element = document.getElementById(id)
    const element = useRef<HTMLElement | null>(null)
    
    const scrollBy = (direction: number) => {
        if (element.current != null)
            element.current.scrollLeft += direction;
    }

    useEffect(() => {
        element.current = document.getElementById(id)
    }, [id])

    return (
        <div className="absolute top-0 h-full w-full cursor-pointer" onClick={() => {scrollBy(direction)}}>
        </div>
    )
}