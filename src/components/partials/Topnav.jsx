import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const GetSerches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSerches();
    }, [query]);

    return (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[9vh] relative flex  items-center p-4">
            <i className="text-zinc-400 text-2xl ml-4 sm:ml-6 md:ml-10 lg:ml-20 ri-search-line"></i>
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[70%] sm:w-[65%] md:w-[60%] lg:w-[50%] text-zinc-200 mx-2 sm:mx-4 md:mx-6 p-2 sm:p-3 md:p-4 lg:p-5 text-base sm:text-lg outline-none border-none bg-transparent"
                type="text"
                placeholder="Search anything..."
            />
            {query.length > 0 && (
                <i
                    onClick={() => setquery("")}
                    className="hover:text-[#961D7F] text-zinc-400 text-xl sm:text-2xl ri-close-fill cursor-pointer ml-2 sm:ml-4"
                ></i>
            )}

            {/* Search Results Dropdown */}
            <div className="z-[100] absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[45vh] bg-zinc-900 text-zinc-200 top-[100%] left-[5%] overflow-auto shadow-lg">
                {searches.map((s, i) => (
                    <Link
                        to={`/${s.media_type}/details/${s.id}`}
                        key={i}
                        className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-400 w-full p-3 sm:p-4 flex items-center border-b-2 border-zinc-600"
                    >
                        <img
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded mr-3 sm:mr-4 shadow-lg"
                            src={
                                s.backdrop_path || s.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          s.backdrop_path || s.profile_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <span className="text-sm sm:text-base">
                            {s.name ||
                                s.title ||
                                s.original_name ||
                                s.original_title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Topnav;
