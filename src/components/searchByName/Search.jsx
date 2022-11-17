import Carousel from "../partials/Carousel";
import Movies from "./Movies";

function SearchPage({
  movieName,
  setMovieName,
  movies,
  trendingMovies,
  setPage,
  page,
}) {
  return movies ? (
    <div>
      <Carousel trendingMovies={trendingMovies} setPage={setPage} page={page} />
      <div className="input-group searchBtn rounded">
        <input
          type="search"
          onChange={(event) => setMovieName(event.target.value)}
          className="form-control lupa"
          placeholder="Movie name..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0 " id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="moviesContainer d-flex flex-wrap">
        <Movies movieName={movieName} movies={movies} />
      </div>
      <div className="noMovies"></div>
    </div>
  ) : (
    <div>
      <Carousel trendingMovies={trendingMovies} setPage={setPage} page={page} />
      <div className="input-group searchBtn rounded">
        <input
          type="search"
          onChange={(event) => setMovieName(event.target.value)}
          className="form-control lupa"
          placeholder="Movie name..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0 movieSearch" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="noMovies">
        <h2 className="font3 black">No movies were searched...</h2>
      </div>
    </div>
  );
}

export default SearchPage;
