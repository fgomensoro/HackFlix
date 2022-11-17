import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actors from "../movie/Actors";
import Genres from "../movie/Genres";

const Movie = () => {
  const params = useParams();
  console.log(params.id);

  const [movie, setMovie] = useState(null);

  const axiosConfig = {
    url: `https://api.themoviedb.org/3/movie/${params.id}`,
    method: "GET",
    params: {
      api_key: "80aad51821ae5941617c89a466deaee6",
      language: "en-US",
      sort_by: "popularity.asce",
      include_video: false,
      append_to_response: "credits",
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios(axiosConfig);
      setMovie(response.data);
    };
    getMovies();
  }, []);

  return (
    movie && (
      <div className="container d-flex cont">
        <div className="card text-bg-dark movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay textImg">
            <div className="row">
              <h5 className="card-title title font4">{movie.title}</h5>
              <hr />
              <div className="col-6 col1">
                <h3 className="font5">Overview:</h3>
                <p className="card-text font1">{movie.overview}</p>
              </div>
              <div className="col-3">
                <h3 className="font5">Actors:</h3>
                <p className="card-text">
                  <Actors movie={movie} />
                </p>
                <div className="mt-4">
                  <h3 className="font5">Release date:</h3>
                  <p className="font1">{movie.release_date}</p>
                </div>
              </div>
              <div className="col-3">
                <h3 className="font5">Rating:</h3>
                <p className="font1">{movie.vote_average} / 10</p>
                <div>
                  <h3 className="font5">Genres:</h3>
                  <p className="card-text">
                    <Genres movie={movie} />
                  </p>
                </div>
                <div>
                  <h3 className="font5 mt-4">Budget/Revenue:</h3>
                  <p className="font1">
                    USD {movie.budget} / USD {movie.revenue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Movie;
