import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const BASE_IMG = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          if (
            movie.backdrop_path !== null &&
            movie.backdrop_path !== undefined &&
            movie.poster_path !== null &&
            movie.poster_path !== undefined
          ) {
            return (
              <img
                onClick={() => handleClick(movie)}
                className={
                  isLargeRow ? "row__poster row__posterLarge" : "row__poster"
                }
                key={movie.id}
                src={
                  isLargeRow
                    ? BASE_IMG + movie?.poster_path
                    : BASE_IMG + movie?.backdrop_path
                }
                alt={movie?.title}
              />
            );
          } else return false;
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
