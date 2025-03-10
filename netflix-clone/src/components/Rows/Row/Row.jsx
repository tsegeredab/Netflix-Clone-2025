import { useState, useEffect } from "react";
import axios from "../../../Utils/axios";
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

import PropTypes from "prop-types";
//import React,{PropTypes} from "react";

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};

// Row.propTypes = {
//   name: PropTypes.string, 
//   age: PropTypes.number,  
//   isAdmin: PropTypes.bool, 
//   data: PropTypes.object, 
// };

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const request = await axios.get(fetchUrl);
    //       setMovies(request.data.results);
    //     } catch (error) {
    //       console.error("Error fetching movies:", error);
    //     }
    //   }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

