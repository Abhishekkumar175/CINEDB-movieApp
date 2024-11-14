import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  document.title = "CINEDB | About";
  const navigate = useNavigate();

  return (
    <div
      className=" relative w-screen bg-[#1F1E24] h-[200vh] bg-cover bg-center text-white p-8 "
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?movie,cinema')",
      }}
     
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#961D7F] mx-2 ri-arrow-left-line"
          ></i>{" "}
          About CINEDB
        </h1>
        <hr className="border-none h-[1px] bg-zinc-600 mt-4" />
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-3">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            Our Movie App is a one-stop destination for movie enthusiasts,
            providing up-to-date information on the latest movies, TV shows, and
            trending actors. Leveraging data from The Movie Database (TMDB), our
            platform enables users to explore titles, watch trailers, and dive
            into the details of their favorite content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-3">Purpose & Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to make discovering movies and TV shows an enjoyable
            experience. We aim to simplify the process of finding quality
            content, empowering users to make informed choices with
            comprehensive insights into trending and classNameic titles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-3">Key Features</h2>
          <ul className="list-inside">
            <li className="flex items-start mb-4">
              <span className="text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg">
                Browse popular, top-rated, and upcoming movies & TV shows
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg">
                Search for specific movies, shows, or actors with ease
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg">
                View trailers, cast, and detailed overviews
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="text-green-400 mr-3 text-xl">✔</span>
              <span className="text-lg">
                Responsive design that adapts to all screen sizes
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-3">Technologies We Use</h2>
          <p className="text-lg leading-relaxed">
            This app is built with{" "}
            <span className="text-blue-400">React.js</span> for the front-end,
            leveraging <span className="text-yellow-400">TMDB API</span> for
            data. We use <span className="text-blue-400">React Router</span> for
            navigation, and <span className="text-pink-400">Tailwind CSS</span>{" "}
            to ensure a modern and visually appealing design.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-3">Future Enhancements</h2>
          <p className="text-lg leading-relaxed">
            We’re excited to enhance this app further by adding user profiles,
            personal watchlists, reviews, and more personalized recommendations
            based on viewing history and preferences. Stay tuned for more
            features to make your movie experience even better!
          </p>
        </section>

        <section className="text-center mt-10">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            Got feedback or suggestions? Reach out to me at{" "}
            <span className="text-blue-400 underline">
              abhishekkumar345ssm@gmail.com
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
