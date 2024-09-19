'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface RedirectImageProps {
    pageUrl: string,
    imgUrl: string,
    priority?: boolean
}

interface RedirectProps {
    pageUrl: string
}

export const RedirectorImageComponent = ({pageUrl, imgUrl, priority} : RedirectImageProps) => {
    const router = useRouter();

    return (
        <div className="w-full h-full relative cursor-pointer" onClick={() => {router.push(pageUrl)}}>
            <Image src={imgUrl} alt=" " priority={priority} sizes={"h-full w-full"} fill={true}/>
        </div>
    )
}

export const RedirectorComponent = ({pageUrl} : RedirectProps) => {
    const router = useRouter();

    return (
        <div className="absolute w-full h-full cursor-pointer" onClick={() => {router.push(pageUrl)}}></div>
    )
}
