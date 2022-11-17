import { useState } from "react";
import MovieModal from "../partials/Modal";

const OneMovie = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <MovieModal movie={movie} show={show} setShow={setShow} />
      <div
        onClick={handleShow}
        className="movieContainer m-3"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      ></div>
    </>
  );
};
export default OneMovie;
