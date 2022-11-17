const Actors = ({ movie }) => {
  const actors = movie.credits.cast;
  const actorsSlice = actors.slice(0, 4);

  console.log(movie);

  const actorsList = actorsSlice.map((actor, index) => (
    <small className="font1" key={index}>{actor.name} . </small>
  ));

  return (
    <div>
      {actorsList}
      <small className="font1"> {actors[4].name}</small>
    </div>
  );
};

export default Actors;
