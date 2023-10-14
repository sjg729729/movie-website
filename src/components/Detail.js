import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(movie);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
      <p>{movie.runtime}</p>
      <p>
        {movie.genres.map((item, value) => (
          <span key={value}>{item} </span>
        ))}
      </p>
      <img src={movie.large_cover_image} alt={movie.title}></img>
    </div>
  );
}

export default Detail;
