import HeaderComponent from '../../components/header/header';
import ChartContent from './chartContent';

export default function Page() {
    return (
        <div className="">
            <HeaderComponent/>
            <div className="flex pt-36 w-full">
                <ChartContent/>
            </div>
        </div>
    )
}