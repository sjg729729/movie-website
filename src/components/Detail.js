import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { symbol } from "prop-types";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(movie.summary);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.img__detail}>
        <img src={movie.large_cover_image} alt={movie.title}></img>
      </div>
      <div className={`${styles.img__detail} ${styles.detail}`}>
        <h1>{movie.title}</h1>
        <p>Release {movie.year}</p>
        <p>⭐️ {movie.rating}</p>
        <p>{movie.runtime} min</p>
        <p>
          Genres :
          {movie.genres &&
            movie.genres.map((item, value) => {
              return <span key={value}> {item} </span>;
            })}
        </p>
        <p>{movie.description_full}</p>
        <button className={styles.btn}>
          <a href={movie.url} target="_blank">
            More
          </a>
        </button>
      </div>
    </div>
  );
}

export default Detail;
