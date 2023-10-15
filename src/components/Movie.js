import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import emptyImg from "../img/empty-poster.jpeg";

function Movie({ id, coverImg, title, summary, genres }) {
  const onErrorImg = (e) => {
    e.target.src = emptyImg;
    e.target.width = 230;
    e.target.height = 345;
  };

  return (
    <div>
      <img src={coverImg} alt={title + "'s Poster"} onError={onErrorImg}></img>
      <br />
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
