import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../searchByName/Search";

const SearchPageQuery = () => {
  const [movies, setMovies] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [page, setPage] = useState(1);

  const axiosConfig = {
    url: "https://api.themoviedb.org/3/search/movie?",
    method: "GET",
    params: {
      api_key: "80aad51821ae5941617c89a466deaee6",
      language: "en-US",
      sort_by: "popularity.asce",
      include_adult: false,
      include_video: false,
      append_to_response: "credits",
      query: movieName,
    },
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios(axiosConfig);
      const data = [...response.data.results];
      setMovies(data);
    };
    getMovies();
  }, [movieName]);

  return (
    <>
      <Search
        movieName={movieName}
        setMovieName={setMovieName}
        setPage={setPage}
        page={page}
        movies={movies}
      />
    </>
  );
};

export default SearchPageQuery;
