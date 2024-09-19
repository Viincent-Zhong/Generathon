'use client'

import Image from 'next/image';
import { useState, useRef } from 'react'
import Filters from './filters';
import Sort from './sort';
import Search from './search';

type BookDatas = {
    cover_olid: number,
    title: string,
    author_name: string,
    contributor: [string],
    edition_count: number,
    first_publish_year: number,
    first_sentence: string,
    ratings_average: number,
}

function BookImage ({cover_olid}: {cover_olid: number}) {
    try {
        return <Image src={`https://covers.openlibrary.org/b/olid/${cover_olid}.jpg?default=false`} alt="No cover found" fill={true} sizes="w-full h-full"/>
    } catch (error) {
        console.error(error);
        return (<h1>No cover image found</h1>)
    }
}

export default function PageContent() {
    const [books, setBooks] = useState<BookDatas[]>([]);
    const filterRef = useRef<any>(null);
    const sortRef = useRef<any>(null);

    const handleSearch = async (search: string) => {
            
        // Combine filters and sort
        const filters = filterRef.current?.getFilters();
        const sorts = sortRef.current?.getSorts();

        try {
            const timeoutId = setTimeout(() => {throw new Error('Timeout')}, 30000);
            const res = await fetch('https://openlibrary.org/search.json?title=' + search + filters + sorts, {
                method: 'GET',
            })
            const data = await res.json();
            const books = data.docs.map((book: any) => {
                return {
                    cover_olid: book.cover_edition_key,
                    title: book.title,
                    author_name: book.author_name,
                    contributor: book.contributor,
                    edition_count: book.edition_count,
                    first_public_year: book.first_publish_year,
                    first_sentence: book.first_sentence? book.first_sentence[0] : undefined,
                    ratings_average: book.ratings_average
                }
            })
            setBooks(books);
            clearTimeout(timeoutId);
        } catch (error) {
            console.error(error);
            return (<></>)
        }
    }

    return (
        <div className="w-3/4 mt-36 h-20 bg-slate-100 ml-20">

            {/* Search bar */}
            <div className="grid grid-rows-1 grid-cols-12 h-full">
                {/* Search */}
                <Search handleSearch={handleSearch}/>
                {/* Filters */}
                <div className="pl-1 row-start-1 col-start-9 row-span-1 col-span-2 h-full bg-slate-200 border-r-2 border-slate-400 border-opacity-50">
                    <Filters ref={filterRef}/>
                </div>
                {/* Sort */}
                <div className="pl-1 row-start-1 col-start-11 row-span-1 col-span-2 h-full bg-slate-200">
                    <Sort ref={sortRef}/>
                </div>
            </div>
            {/* Books */}
            { books.length > 0 && 
                <ul className="mt-20 mb-10 w-50 lg:w-[100rem]">
                    {books.map((book, index) => {
                        return (
                            <li key={index} className="w-full bg-amber-100 rounded-xl mb-10">
                                {/* Infos */}
                                <div className="flex flex-row w-full pb-4">
                                    <div className="pt-10 pl-10 w-2/3">
                                        <p className="text-5xl font-mono text-center">{book.title} by {book.author_name}</p>
                                        <br/><br/>
                                        <p className="mt-4 text-2xl font-thin">Contributor : 
                                            <a className="font-mono text-3xl"> {book.contributor}</a>
                                        </p>
                                        <p className="mt-4 text-2xl font-thin">Number of edition: 
                                            <a className="font-mono text-3xl"> {book.edition_count}</a>
                                        </p>
                                        <p className="mt-4 text-2xl font-thin">Published year: 
                                            <a className="font-mono text-3xl"> {book.first_publish_year}</a>
                                        </p>
                                        <p className="mt-4 text-2xl font-thin">First sentence: 
                                            <a className="font-mono text-2xl"> {book.first_sentence}</a>
                                        </p>
                                        <p className="mt-4 text-2xl font-thin">Ratings average: 
                                            <a className="font-mono text-3xl"> {book.ratings_average}</a>
                                        </p>
                                    </div>
                                    {/* Cover image */}
                                    <div className="relative h-[40rem] w-1/3 mr-4 mt-4">
                                        <BookImage cover_olid={book.cover_olid}/>
                                    </div>
                                </div>
                            </li>
                    )})}
                </ul>
            }
        </div>
    )
}