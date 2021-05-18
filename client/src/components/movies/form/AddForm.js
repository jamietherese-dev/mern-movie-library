import { useState } from "react";
import "./styles.css";

const AddForm = ({ onSubmit }) => {

  const defaultMovie = {
    title: '',
    description: '',
    runningTime: '',
    releaseYear: '',
    genreValues: '',
    avatar: '',
  };
  const [movie, setMovie] = useState(defaultMovie);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(movie);
    setMovie({...defaultMovie});
  }

  function formatGenres(value) {
    return value.split(",").map(item => item.trim());
  }

  return (
    <div className="col pr-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Movie title"
            value={movie.title} onChange={e => setMovie({ ...movie, title: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea type="text" className="form-control" placeholder="Movie short description" maxLength="50"
            value={movie.description} onChange={e => setMovie({ ...movie, description: e.target.value })} required />
          <small id="descriptionHelp" className="form-text text-muted">  Maximum of 50 characters </small>
        </div>
        <div className="form-group">
          <label>Running Time (minutes) </label>
          <input type="number" className="form-control" placeholder="Running time in minutes"
            value={movie.runningTime} onChange={e => setMovie({ ...movie, runningTime: e.target.value })} required />
        </div>
        <div className="form-group">
          <label>Release Year</label>
          <input type="number" className="form-control"  placeholder="Release year"
            value={movie.releaseYear} onChange={e => setMovie({ ...movie, releaseYear: e.target.value })} required/>
        </div>
        <div className="form-group">
          <label>Genres</label>
          <input type="text" className="form-control" placeholder="e.g. Comedy, Thriller, Action"
             value={movie.genreValues} onChange={e => setMovie({ ...movie, genreValues: e.target.value,  genres: formatGenres(e.target.value) })} required
          />
          <small id="genresHelp" className="form-text text-muted">
            Separate your genres with comma
          </small>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input className="form-control"  placeholder="Movie poster image URL"
            value={movie.avatar} onChange={e => setMovie({ ...movie, avatar: e.target.value })}/>
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
