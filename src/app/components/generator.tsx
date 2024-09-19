import Image from 'next/image'
import HeaderComponent from './header/header'

interface Props {
    generatorComponent: JSX.Element;
    backgroundUrl?: string;
}

export default function GeneratorComponent({ generatorComponent, backgroundUrl }: Props) {
    return (
        <div className="min-h-screen min-w-screen">
            <HeaderComponent/>
            {/* Background */}
            {backgroundUrl &&
                <div className="fixed w-full h-full -z-10">
                    <div className="relative w-full h-full">
                        <Image src={backgroundUrl} fill={true} alt="container"/>
                    </div>
                </div>
            }
            {/* Generator */}
            <div className="fixed pt-32 w-full h-full">
                {generatorComponent}
            </div>
        </div>
    )
}