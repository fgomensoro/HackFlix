import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../home/Search";

const HomePage = () => {
  const random = Math.floor(Math.random() * 10 + 1);
  const [movies, setMovies] = useState(null);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(random);
  const [filtered, setFiltered] = useState([]);
  

  const axiosConfig = {
    url: "https://api.themoviedb.org/3/discover/movie?",
    method: "GET",
    params: {
      api_key: "80aad51821ae5941617c89a466deaee6",
      language: "en-US",
      sort_by: "popularity.asce",
      include_adult: false,
      include_video: false,
      page: page,
      movie_id: rating,
      "vote_count.gte": 500,
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios(axiosConfig);
      const data = [...response.data.results];
      setMovies(data);
      setFiltered(data);
    };
    getMovies();
  }, [rating]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios(axiosConfig);
      const data = [...response.data.results];
      setMovies([...movies, ...data]);
      setFiltered([...filtered, ...data]);
    };
    page > 1 && getMovies();
  }, [page]);

  return (
    <>
      <Search
        rating={rating}
        setRating={setRating}
        setPage={setPage}
        movies={movies}
        filtered={filtered}
        setFiltered={setFiltered}
      />
    </>
  );
};

export default HomePage;
