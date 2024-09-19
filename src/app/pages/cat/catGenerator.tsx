'use client'

import Image from "next/image"
import { useState } from "react"
import { useAppDispatch } from "../../../lib/hooks"
import { increment } from "../../../lib/features/counter/counterSlice"

export default function CatGenerator () {
    const [catFact, setCatFact] = useState<string>('');
    const [catPicture, setCatPicture] = useState<string>('');
    const audio = typeof Audio !== "undefined" ? new Audio('/assets/cat-meow.mp3') : undefined;
    const dispatch = useAppDispatch(); // Action Dispatcher

    const incrementCounter = () => {
        dispatch(increment());
    }

    const generateCat = async () => {
            try {
                const timeoutId = setTimeout(() => {throw new Error('Timeout')}, 5000);
                await fetch('https://cat-fact.herokuapp.com/facts',
                {
                    method: 'GET'
                }).then(response => response.json())
                .then(data => {
                    setCatFact(data[0].text);
                });

                await fetch('https://cataas.com/cat',
                {
                    method: 'GET'
                })
                .then(response => response.blob())
                .then(picture => {
                    setCatPicture(URL.createObjectURL(picture));
                });
                incrementCounter();
                clearTimeout(timeoutId);
            } catch(error) {
                console.error(error);
            }
    }

    const playCatSound = () => {
        audio?.play();
    }

    return (
        <div className="lg:ml-24 lg:mt-40 flex flex-row w-full h-full">
            {/* Generator button */}
            <div className="w-24 h-16 lg:w-60 lg:h-24 shadow-2xl bg-white cursor-pointer rounded-md flex justify-center items-center hover:bg-slate-300 hover:text-slate-50" onClick={generateCat}>
                <p className="font-bold lg:text-2xl"> Generate Cat </p>
            </div>
            {/* Cat Picture and Fact */}
            <div className="ml-10 h-80 w-80 lg:h-3/4 lg:w-2/5  flex flex-col lg:-mt-24">
                <div className="relative h-full w-full">
                    <Image src={catPicture} fill={true} sizes={"h-full w-full"} alt=" "/>
                </div>
                <p className="lg:font-semibold lg:text-center text-xl">{catFact}</p>
            </div>
            {/* Cat Paw */}
            <div className="fixed right-10 pt-20 lg:cursor-pointer">
                <div className="lg:visible lg:h-56 lg:w-56 relative" onClick={playCatSound}>
                    <Image src="/images/cat-paw.png" fill={true} sizes={"h-full w-full"} alt="cat paw"/>
                </div>
            </div>
        </div>
    )
}