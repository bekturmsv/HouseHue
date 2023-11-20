import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfrect</span> <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          House Hue is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-blue-800 font-bold hover:underline"
        >
          Let's get started
        </Link>
      </div>
      {/* swiper */}

      {/* listing results for offer, sale and rent */}
    </div>
  );
};

export default Home;
