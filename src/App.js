import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
    console.log(json.data.movies);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Movie!!!</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={movie.medium_cover_image}
                alt={movie.title + "'s Poster"}
              ></img>
              <div>{movie.title}</div>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
