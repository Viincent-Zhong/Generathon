import Image from "next/image"
import Scroller from "./scroller"
import ImagesDisplayer from "./imagesDisplayer"

export default function ImageSection() {
    const images = [1, 2, 3, 4, 5, 6]
    return (
        <div className="flex flex-col">
            <div className="invisible lg:visible flex justify-center items-center pr-52 pt-24 pb-24 w-full">
                <div className="relative lg:h-24 w-24 mr-24 hover:text-cyan-200">
                    <h1 className="select-none text-[50px] font-thin">
                    {"<"}
                    </h1>
                    <Scroller id="section-pictures" direction={-300}/>
                </div>
                <div className="w-1/4 lg:h-96 bg-gradient-to-r from-cyan-200 to-cyan-100 rounded-xl">
                    <ul id="section-pictures" className="scroll-mt-36 no-scrollbar flex flex-row overflow-x-scroll w-full h-full -mt-8 -ml-8 rounded-xl snap-x snap-mandatory">
                        {images.map((id) => { return (
                            <li key={id} className="relative h-full min-w-full snap-start rounded-xl">
                                <Image src={`/images/me/me${id}.jpg`} sizes="h-full min-w-full" fill={true} alt=" "/>
                            </li>
                        )})}
                    </ul>
                </div>
                <div className="relative h-24 w-24 ml-24 hover:text-cyan-200">
                    <h1 className="select-none text-[50px] font-thin"> 
                        {">"}
                    </h1>
                    <Scroller id="section-pictures" direction={300}/>
                </div>
            </div>
            <div className="invisible lg:visible w-full flex flex-col items-center pr-40">
                <div className="w-[85%] lg:h-[34rem] p-10">
                    <ImagesDisplayer imgUrls={images.map((id) => `/images/travel/travel${id}.jpg`)}/>
                </div>
                <p className="-mt-24 font-thin text-2xl text-center">These are not the best pictures I took in Korea. Just the few remaining on my phone.
                <br/>It's even better there!</p>
            </div>
        </div>
    )
}