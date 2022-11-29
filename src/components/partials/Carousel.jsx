import axios from "axios";
import { useEffect, useState } from "react";

const HeroCarousel = () => {
  const random = Math.random() * (8.564 - 8.35) + 8.35;
  const [trendingMovies, setTrendingMovies] = useState(null);

  const axiosConfig = {
    url: "https://api.themoviedb.org/3/discover/movie?",
    method: "GET",
    params: {
      api_key: "80aad51821ae5941617c89a466deaee6",
      language: "en-US",
      sort_by: "popularity.asce",
      include_adult: false,
      include_video: false,
      page: 1,
      "vote_average.gte": random,
      "vote_count.gte": 3000,
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios(axiosConfig);
      const data = [...response.data.results];
      setTrendingMovies(data);
    };
    getMovies();
  }, []);

  

  return (
    trendingMovies && (
      <div className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators inner">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active carouselBtn"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                width: "250px",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies[0].poster_path})`,
              }}
            ></button>
            <button
              type="button"
              className="carouselBtn"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                width: "250px",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies[1].poster_path})`,
              }}
            ></button>
            <button
              type="button"
              className="carouselBtn carBtn3"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                width: "250px",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies[2].poster_path})`,
              }}
            ></button>
            <button
              type="button"
              className="carouselBtn carBtn4"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={{
                width: "250px",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies[3].poster_path})`,
              }}
            ></button>
            <button
              type="button"
              className="carouselBtn carBtn5"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              style={{
                width: "250px",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovies[4].poster_path})`,
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="active carousel-item">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trendingMovies[0].backdrop_path})`,
                }}
                className="d-block w-100 carouselImg"
              ></div>
              <div className="carousel-caption d-md-block carouselCaptions">
                <h5 className="font3">{trendingMovies[0].title}</h5>
                <p className="font1">{trendingMovies[0].overview}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trendingMovies[1].backdrop_path})`,
                }}
                className="d-block w-100 carouselImg"
              ></div>
              <div className="carousel-caption  d-md-block carouselCaptions">
                <h5 className="font3">{trendingMovies[1].title}</h5>
                <p className="font1">{trendingMovies[1].overview}</p>
              </div>
            </div>
            <div className="carousel-item carBtn3">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trendingMovies[2].backdrop_path})`,
                }}
                className="d-block w-100 carouselImg"
              ></div>
              <div className="carousel-caption  d-md-block carouselCaptions">
                <h5 className="font3">{trendingMovies[2].title}</h5>
                <p className="font1">{trendingMovies[2].overview}</p>
              </div>
            </div>
            <div className=" carousel-item carBtn4">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trendingMovies[3].backdrop_path})`,
                }}
                className="d-block w-100 carouselImg"
              ></div>
              <div className="carousel-caption  d-md-block carouselCaptions">
                <h5 className="font3">{trendingMovies[3].title}</h5>
                <p className="font1">{trendingMovies[3].overview}</p>
              </div>
            </div>
            <div className="carousel-item carBtn5">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${trendingMovies[4].backdrop_path})`,
                }}
                className="d-block w-100 carouselImg"
              ></div>
              <div className="carousel-caption  d-md-block carouselCaptions ">
                <h5 className="font3">{trendingMovies[4].title}</h5>
                <p className="font1">{trendingMovies[4].overview}</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  );
};

export default HeroCarousel;
