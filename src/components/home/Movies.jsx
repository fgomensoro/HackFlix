import OneMovie from "./OneMovie";

const Movies = ({ filtered, rating }) => {
  
  return filtered.map((movie) => <OneMovie movie={movie} key={movie.id} />);
};

export default Movies;
