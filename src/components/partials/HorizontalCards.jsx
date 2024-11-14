import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data = [], title }) => {
    return (
        <div className="w-full flex overflow-y-hidden mb-3 p-1">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] xl:min-w-[15%] h-[30vh] sm:h-[35vh] bg-zinc-900 mr-3 mb-3"
                    >
                        <img
                            className="w-full h-[50%] sm:h-[55%] object-cover"
                            src={
                                d.backdrop_path || d.poster_path
                                    ? `https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="text-white p-2 sm:p-3 h-[50%] sm:h-[45%] overflow-y-auto">
                            <h1 className="text-base sm:text-lg font-semibold">
                                {d.name ||
                                    d.title ||
                                    d.original_name ||
                                    d.original_title}
                            </h1>
                            <p className="text-xs sm:text-sm">
                                {d.overview?.slice(0, 60)}...
                                <span className="text-zinc-500 text-xs sm:text-sm"> more</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-xl sm:text-2xl md:text-3xl mt-5 text-white font-black text-center w-full">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;
