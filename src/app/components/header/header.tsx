import { promises as fs } from 'fs';
import { RedirectorImageComponent, RedirectorComponent } from "../redirectorImage"

import SearchBarComponent from "./searchBar"

export type GeneratorLinks = {
    id: number;
    title: string;
    pageUrl: string;
}

export default async function HeaderComponent() {
    const file = await fs.readFile(process.cwd() + '/src/app/constants/generators.json', 'utf8');
    const generators: GeneratorLinks[] = JSON.parse(file).generators;

    return (
        <div className="fixed w-full top-0 z-50">
            {/* Header */}
            <div className="flex flex-row w-full h-full md:h-16 lg:h-24 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-md shadow-lg shadow-black/50">
                {/* Logo */}
                <div className="relative h-full w-10 md:w-24 cursor-pointer ml-20 p-2 hover:bg-slate-400 rounded-md">
                    <RedirectorImageComponent priority={true} pageUrl="/" imgUrl="/images/logo.png"/>
                </div>
                <SearchBarComponent generators={generators}/>
                {/* About me */}
                <div className="ml-auto mr-2 h-full flex flex-row items-center bg-cyan-500 hover:bg-cyan-700">
                    <p className="lg:text-3xl p-2 text-slate-200">About me</p>
                    <RedirectorComponent pageUrl="/pages/about-me"/>
                </div>
            </div>
        </div>
    )
}