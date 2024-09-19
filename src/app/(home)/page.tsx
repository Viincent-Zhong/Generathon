import { promises as fs } from 'fs';

import HeaderComponent from "../components/header/header"
import SpaceNewsComponent from "./spaceNews"
import { Generator } from "../constants/types"
import { RedirectorImageComponent } from '../components/redirectorImage'
import CounterDisplayComponent from "./counterDisplay"

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/src/app/constants/generators.json', 'utf8');
    const generators: Generator[] = JSON.parse(file).generators;

    return (
        <div className="min-w-screen">
            <HeaderComponent />
            {/* Table */}
            <div className="h-36 w-36 mt-36 ml-20">
                <CounterDisplayComponent/>
            </div>
            <div className="flex flex-row mt-16">
                {/* Generators */}
                <div className="ml-24 w-7/12 h-full">
                    {generators.map((generator: Generator) => {
                        return (
                            <div key={generator.id} className="flex flex-row h-40 shadow-lg shadow-black/50 mt-0.5">
                                <div className='w-96 flex align-middle items-center'>
                                    {/* Picture */}
                                    <div className='relative h-full w-1/2 border border-black'>
                                        <RedirectorImageComponent pageUrl={generator.pageUrl} imgUrl={generator.pictureUrl}/>
                                    </div>
                                    {/* Title */}
                                    <div className="flex items-center justify-center border w-1/2 border-black h-full ">
                                        <p className="font-bold">{generator.title}</p>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="p-2 border w-full border-black h-full">{generator.description}</p>
                            </div>
                        )
                    })}
                </div>
                {/* Right side of the app */}
                <div className="mx-auto -mt-40">
                    <SpaceNewsComponent/>
                </div>
            </div>
        </div>
    )
}