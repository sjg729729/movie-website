import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import emptyImg from "../img/empty-poster.jpeg";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  const onErrorImg = (e) => {
    e.target.src = emptyImg;
    e.target.width = 230;
    e.target.height = 345;
  };

  return (
    <div className={styles.movie}>
      <div className={styles.title}>
        <Link to={`/movie/${id}`}>
          <img
            className={styles.cover__img}
            src={coverImg}
            alt={title + "'s Poster"}
            onError={onErrorImg}
          ></img>
        </Link>
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
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
