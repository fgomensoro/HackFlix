const Genres = ({ movie }) => {
  const genres = movie.genres;

  console.log(movie);

  const genresList = genres.map((genre, index) => (
    <small className="font1" key={index}>
      <small> </small>
      {genre.name}
    </small>
  ));

  return <div>{genresList}</div>;
};

export default Genres;
