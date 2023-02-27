import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

export default function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`} className="link">
          {title}
        </Link>
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Link: 새로고침 하지않고 페이지 이동
