import React from 'react'

export default function MovieCard({ item }) {
    if (!item) return null;
    return (
        <div className="flex flex-col items-stretch w-[140px] h-[260px] bg-zinc-800 text-white rounded shadow p-1 hover:scale-105 transition-transform duration-300">
            <img
                src={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : ""}
                alt={item.title || item.name}
                className="w-full h-[180px] object-cover rounded mb-2"
            />
            <h2 className="w-full text-xs text-center break-words">
                {item.title || item.name}
            </h2>
        </div>
    );
}
