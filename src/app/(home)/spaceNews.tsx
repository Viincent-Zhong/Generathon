const queryOneNews = new URLSearchParams({
    limit: '1'
});

type News = {
    title: string;
    url: string;
    imageUrl: string;
}

import { RedirectorImageComponent } from "../components/redirectorImage";

export default async function SpaceNewsComponent () {
    try {
            const timeoutId = setTimeout(() => {throw new Error('Timeout')}, 5000);
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles?' + queryOneNews, {
                headers: {
                    'method': 'GET',
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();

            const news : News = {
                title: data.results[0].title,
                url: data.results[0].url,
                imageUrl: data.results[0].image_url
            }
            clearTimeout(timeoutId);
            return (
                <div className="w-96 flex flex-col bg-red-50 rounded-lg">
                    <p className="w-full rounded-t-lg bg-red-200 select-none text-4xl font-bold underline-offset-0 text-center">Last space news!!</p>
                    <div className="p-4 w-full flex flex-col  items-center">
                        <p className="font-bold w-11/12 text-2xl">{news.title}</p>
                        <div className="mt-4 relative h-80 w-11/12">
                            <RedirectorImageComponent pageUrl={news.url} imgUrl={news.imageUrl} />
                        </div>
                    </div>
                </div>
            )
        } catch(error) {
            console.error('Error:', error);
        }
    return (<></>)
};
