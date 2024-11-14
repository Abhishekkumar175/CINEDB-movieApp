import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    ytvideo && ytvideo.name && (document.title = "CINEDB | " + ytvideo.name);
    return (
        <div className="bg-[rgba(0,0,0,.2)] absolute z-[1000]  mt-6 mb-4 top-0 left-15 w-[85%] h-[50%] flex  items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#961D7F] ri-close-fill text-3xl text-white right-[3%] top-[3%]"
            ></Link>
            {ytvideo ? (
                <ReactPlayer
                    controls
                    height={500}
                    width={900}
                    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Trailer;
