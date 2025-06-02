import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { fetchPopularMovies, fetchPopularTvShows, fetchAiringTodayMovies } from '../services/api'

export default function Home() {
    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])
    const [airingToday, setAiringToday] = useState([])

    useEffect(() => {
        fetchPopularMovies().then(setMovies)
        fetchPopularTvShows().then(setTvShows)
        fetchAiringTodayMovies().then(setAiringToday)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full min-h-screen">

            <div>
                <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide pt-5">
                    {airingToday.length === 0 ? (
                        <div className="text-white">No "Airing Today" shows found.</div>
                    ) : (
                        airingToday.slice(0, 13).map(airingToday => (
                            <MovieCard key={`airingToday-${airingToday.id}`} item={airingToday} />
                        ))
                    )}
                </div>
            </div>


            <div className="w-full max-w-5xl mb-8">
                <h2 className="font-bold text-lg">Popular Movies</h2>
                <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide pt-5">
                    {movies.slice(0, 13).map(movie => (
                        <MovieCard key={`movie-${movie.id}`} item={movie} />
                    ))}
                </div>
            </div>

            <div className="w-full max-w-5xl">
                <h2 className="font-bold text-lg">Popular TV Shows</h2>
                <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide pt-5">
                    {tvShows.slice(0, 13).map(tvShow => (
                        <MovieCard key={`tvShow-${tvShow.id}`} item={tvShow} />
                    ))}
                </div>
            </div>

        </div>
    )
}
