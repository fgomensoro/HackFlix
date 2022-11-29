import Carousel from "../partials/Carousel";
import Movies from "./Movies";
import InfiniteScroll from "react-infinite-scroll-component";
import Filter from "./Filter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SearchPage({
  rating,
  setRating,
  setPage,
  movies,
  page,
  trendingMovies,
  filtered,
  setFiltered,
}) {
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    movies && (
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={true}
        next={() => setPage((prev) => prev + 1)}
      >
        <div>
          <Carousel trendingMovies={trendingMovies} />
          <Filter
            movies={movies}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <AnimatePresence>
            <motion.div
              layout
              className="moviesContainer mt-5 d-flex flex-wrap"
            >
              <Movies rating={rating} filtered={filtered} />
            </motion.div>
          </AnimatePresence>
        </div>
      </InfiniteScroll>
    )
  );
}

export default SearchPage;
