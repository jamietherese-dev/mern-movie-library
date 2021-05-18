import './styles.css';
import ReactTooltip from 'react-tooltip'

const MovieListItem = ({ movie }) => {

  const defaultImageSrc = process.env.PUBLIC_URL + 'poster-placeholder.png';

  return (
    <div key={movie._id} className="col-3">
      <div className="item-movie">
        <img className="img-poster" src={movie.avatar || defaultImageSrc} alt="movie-poster" />
        <div>{movie.releaseYear}</div>
        <div><h4>{movie.title}</h4></div>
        <div>{movie.genres && movie.genres.join(", ")}</div>
        <div className="description" data-tip={movie.description}><p>{movie.description}</p></div>
      </div>
      <ReactTooltip className="tooltip" place="bottom" type="light" multiline={true} />
    </div>
  );
};

export default MovieListItem;
