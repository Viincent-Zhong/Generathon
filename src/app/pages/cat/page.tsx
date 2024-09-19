import CatGenerator from './catGenerator'
import GeneratorComponent from '../../components/generator'

export default function Page() {
    return (
        <div>
            <GeneratorComponent generatorComponent={<CatGenerator/>} backgroundUrl="/images/cat-bg.png"/>
        </div>
    )
}