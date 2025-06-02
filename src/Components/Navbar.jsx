import React from 'react'

/* 
app logo
search bar 
favorites
notification
profile
bar icon ( movie, tv, etc. )
*/

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center bg-zinc-800 text-white px-8 py-3 shadow-md sm:text-lg ">
            {/* ---app logo--- */}
            <p className="font-bold tracking-wide  md:text-xl">Logo</p>

            <div className="flex flex-row gap-8 justify-end">
                {/* ---search bar--- */}
                <div className="flex flex-row items-center bg-zinc-700 px-4 py-2 rounded-full shadow-inner sm:mx-0 md:mx-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden sm:block bg-transparent outline-none text-white placeholder-gray-300 px-2 w-full"
                    />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>


                <div className="flex flex-row items-center gap-6  md:text-xl">
                    <button>
                        {/* ---favorites--- */}
                        <i className="fa-solid fa-heart"></i>
                    </button>

                    <button>
                        {/* ---notification--- */}
                        <i className="fa-solid fa-bell text-lg cursor-pointer hover:text-blue-500"></i>
                    </button>

                    <button>
                        {/* ---profile--- */}
                        <i className="fa-solid fa-user text-lg cursor-pointer hover:text-blue-500"></i>
                    </button>

                    <button>
                        {/* ---bar icon--- */}
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}