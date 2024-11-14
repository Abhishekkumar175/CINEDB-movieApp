import axios from "../../utils/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // For menu icons

const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the sidebar open/closed state
    };
    return (
        <div className="flex">
            {/* Menu Icon for smaller screens */}
            <div className="lg:hidden p-4">
                <button onClick={toggleSidebar} className="text-white text-3xl">
                    {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed lg:static top-0 left-0 w-[50%] lg:w-60 h-screen bg-gray-900 border-r-2 border-zinc-600 p-5 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
            >
                <h1 className="text-2xl text-white font-bold">
                    <i className="text-[#961D7F] ri-bilibili-line mr-2"></i>
                    <span className="text-3xl">CINEDB</span>
                </h1>
                <nav className="flex flex-col text-zinc-400 text-xl gap-2">
                    <h1 className="text-white font-semibold text-xl mt-6 mb-2">
                        Explore Now
                    </h1>
                    <Link
                        to="/trending"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className=" text-[hsla(0,67%,53%,1)] ri-fire-fill"></i> Trending
                    </Link>
                    <Link
                        to="/popular"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className="mr-2 text-[#ebe83a] ri-sparkling-2-fill"></i>
                        Popular
                    </Link>
                    <Link
                        to="/movie"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className="mr-2 text-[hsl(126,62%,55%)] ri-movie-2-fill"></i>
                        Movies
                    </Link>
                    <Link
                        to="/tv"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className="mr-2 text-[#16e4e8] ri-tv-2-fill"></i>
                        Tv Shows
                    </Link>
                    <Link
                        to="/person"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className="mr-2 text-[#7e39ee] ri-team-fill"></i>
                        Personality
                    </Link>
                </nav>
                <hr className="border-none h-[1px] bg-zinc-600 mt-4" />
                <nav className="flex flex-col text-zinc-400 text-xl gap-2 mt-3">
                    <Link
                        to="/about"
                        className="hover:bg-[#961D7F] hover:text-white duration-300 rounded-lg p-2"
                    >
                        <i className="mr-2 text-[#e39735e0] ri-information-fill"></i> About
                    </Link>
                </nav>
            </div>

            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidenav;