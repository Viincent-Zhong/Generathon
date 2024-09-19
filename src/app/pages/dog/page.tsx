import DogGeneratorComponent from './dogGenerator'
import GeneratorComponent from '../../components/generator'

export default function Page() {
    return (
        <div>
            <GeneratorComponent generatorComponent={<DogGeneratorComponent/>} backgroundUrl="/images/dog-bg.jpeg"/>
        </div>
    )
}