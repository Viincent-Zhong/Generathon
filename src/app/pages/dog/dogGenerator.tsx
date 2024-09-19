'use client'

import Image from "next/image"
import { useState } from "react"

import { useAppDispatch } from "../../../lib/hooks"
import { increment } from "../../../lib/features/counter/counterSlice"

export default function DogGeneratorComponent () {
    const [barkMode, setBarkMode]= useState<boolean>(false); // Bark Mode
    const [hidePicture, setHidePicture] = useState<boolean>(false); // Hide Picture
    const dispatch = useAppDispatch(); // Action Dispatcher
    const [dogPicture, setDogPicture] = useState<string>(''); // Dog Picture
    const audio = typeof Audio !== "undefined" ? new Audio('/assets/dog-bark.wav') : undefined;

    const incrementCounter = () => {
        dispatch(increment());
    }

    const generateDog = async () => {
        try {
            const timeoutId = setTimeout(() => {throw new Error('Timeout')}, 5000);
            await fetch('https://dog.ceo/api/breeds/image/random',
            {
                method: 'GET'
            })
            .then(response => response.json().then(data => {
                setDogPicture(data.message);
            }))
            setHidePicture(false);
            incrementCounter();
            clearTimeout(timeoutId);
        } catch(error) {
            console.error(error);
        }
    }

    const triggerDog = () => {
        setBarkMode(true);
        setHidePicture(true);
        audio?.play();
        setTimeout(() => {
            setBarkMode(false);
        }, 3000)
    }

    return (
        <div className="w-full h-full lg:ml-24 lg:mt-16 flex flex-row">
            {/* Button */}
            <div className='h-10 w-28 lg:h-28 lg:w-52 bg-gradient-to-r from-fuchsia-300 to-fuchsia-200 text-slate-200 shadow-2xl rounded-md
            flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-200 hover:text-fuchsia-300'
            onClick={generateDog}>
                <p className="lg:text-3xl font-bold italic">Paw paw!</p>
            </div>

            {/* Angry dog mode */}
            { barkMode &&
            <div className="fixed left-[20%] top-[10%]">
                <div className="flex justify-center items-center h-[30vh] w-[30vw] lg:w-[30vh] rounded-full bg-white">
                    <div className="relative h-[25vh] w-[25vw] lg:w-[25vh]">
                        <Image className="rounded-full" src='/images/angry-dog.png' alt="angry dog" fill={true}/>
                    </div>
                </div>
            </div>
            }

            {/* Image */}
            { !hidePicture &&
            <div className="fixed h-[30vh] width-[20vw] right-[35%] top-[15%]">
                <div className="relative h-[30vh] w-[20vw]">
                    <Image className="rounded-full" src={dogPicture} alt=" " fill={true}/>
                </div>
            </div>
            }
            {/* Star */}
            <div className="fixed h-[15vh] w-[15vh] right-[10vw] top-[20vh] animate-pulse">
                <div className="relative h-full w-full">
                    <Image src='/images/star.png' alt="star" fill={true} sizes="h-full w-full"/>
                </div>
            </div>
            {/* Tail */}
            <div className="fixed h-[25%] w-[20%] top-1/2 right-[10%] cursor-pointer" onClick={triggerDog}>
            </div>
        </div>
    )
}