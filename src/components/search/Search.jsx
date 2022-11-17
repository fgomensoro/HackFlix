import Carousel from "../partials/Carousel";
import Movies from "./Movies";
import StarRating from "./StarRating";
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
      <div>
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={true}
          next={() => setPage((prev) => prev + 1)}
        >
          <div>
            <Carousel trendingMovies={trendingMovies} />
            <StarRating setRating={setRating} />
            <div className="moviesContainer d-flex flex-wrap mt-5">
              <Movies rating={rating} movies={movies} />
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  );
}

export default SearchPage;
