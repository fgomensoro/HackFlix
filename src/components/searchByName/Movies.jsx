import OneMovie from "./OneMovie";

const Movies = ({ movies, rating }) => {
  return movies.map((movie) => <OneMovie movie={movie} key={movie.id} />);
};

export default Movies;
