'use client'

import React from "react"

import { useEffect, useState, useRef } from "react"

interface Navigator {
    id: string;
    text: string;
    section: boolean;
}

const navigators : Navigator[] = [
    { id: 'section-introduction', text: 'Introduction', section: true},
    { id: 'section-start', text: 'Start', section: true},
    { id: 'section-korea', text: 'Korea', section: true},
    { id: 'section-first-semester', text: 'First semester', section: false},
    { id: 'section-second-semester', text: 'Second semester', section: false},
    { id: 'section-new-me', text: 'Resolutions', section: true},
    { id: 'section-conclusion', text: 'Conclusion', section: true},
    { id: 'section-pictures', text: 'Pictures', section: true}
]

export default React.memo(function ScrollingBar() {
    const sections = useRef<HTMLElement[]>([]);
    const [hightLight, setHighLight] = useState('introduction');
    const lastScroll = useRef(0);

    const handleScroll = () => {
        const scrollValue = Math.abs(window?.pageYOffset - lastScroll.current);

        // Compute highlight every 100 pixels
        if (scrollValue < 100)
            return;
        lastScroll.current = window.pageYOffset;
        let current = '';
        for (let i = 0; i < sections.current.length; i++) {
            // 9rem /* 144px */
            if (window.pageYOffset + 144 >= sections.current[i].offsetTop) {
                current = sections.current[i].id;
            }
        }
        setHighLight(current);
    }

    useEffect(() => {
        const section = document.querySelectorAll('[id^="section-"]');
        if (section) {
            sections.current = Array.from(section) as HTMLElement[];
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="fixed invisible lg:visible h-full top-40 right-14 w-64">
            <div className="">
                <h1 className="text-5xl font-thin"> Summary </h1>
                <ul className="pt-10 space-y-2">
                    {navigators.map((nav) => {
                        return (
                            <li key={nav.id} className={nav.section ? 'text-4xl' : 'pl-4 text-2xl'}>
                                <a href={`#${nav.id}`} className={nav.id === hightLight ? 'text-cyan-500': ''}>{nav.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
})