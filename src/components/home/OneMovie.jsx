import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OneMovie = ({ movie }) => {
  const path = `/movie/${movie.id}`;

  return (
    <Link to={path}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        layout
        className="movieContainer m-3"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      ></motion.div>
    </Link>
  );
};
export default OneMovie;
