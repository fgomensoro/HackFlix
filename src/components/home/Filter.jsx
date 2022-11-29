import { useEffect } from "react";
import Genres from "./Genres";

function Filter({ setActiveGenre, activeGenre, setFiltered, movies }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filterContainer">
      <button
        onClick={() => setActiveGenre(0)}
        className={`${activeGenre === 0 ? "active" : ""} allBtn`}
      >
        All
      </button>

      <div className="genreContainer">
        {Genres.map((genre) => (
          <button
            onClick={() => setActiveGenre(genre.id)}
            className={activeGenre === genre.id ? "active" : ""}
          >
            {genre.genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
