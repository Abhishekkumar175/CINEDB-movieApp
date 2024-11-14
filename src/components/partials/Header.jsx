import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-full md:w-[80%] lg:w-[70%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-full md:w-[80%] lg:w-[80%] mt-2 mb-2 text-white text-sm sm:text-base md:text-md lg:text-lg">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white text-xs sm:text-sm md:text-base lg:text-md">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="mt-5 bg-[#961D7F] p-2 rounded text-white text-sm sm:text-base md:text-lg lg:text-xl"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
