import { useState } from "react";
import { Link } from "react-router-dom";

const OneMovie = ({ movie }) => {
  const path = `/movie/${movie.id}`;

  return (
    <Link
      to={path}
      className="movieContainer m-3"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
      }}
    ></Link>
  );
};
export default OneMovie;
