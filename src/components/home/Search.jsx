import Carousel from "../partials/Carousel";
import Movies from "./Movies";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchPage({
  rating,
  setRating,
  setPage,
  movies,
  page,
  trendingMovies,
}) {
  return (
    movies && (
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={true}
        next={() => setPage((prev) => prev + 1)}
      >
        <div>
          <Carousel trendingMovies={trendingMovies} />
          <div className="moviesContainer mt-5 d-flex flex-wrap">
            <Movies rating={rating} movies={movies} />
          </div>
        </div>
      </InfiniteScroll>
    )
  );
}

export default SearchPage;
