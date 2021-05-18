import { useEffect, useState } from "react";
import Header from "../header/Header";
import MovieListItem from "./item/MovieListItem"
import AddForm from "./form/AddForm";


const MovieList = (props) => {

  const BASE_API_URL = 'http://localhost:5000';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();

  }, []);

  function loadMovies() {
    fetch(`${BASE_API_URL}/movies`)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      }).catch(error => console.error(error));
  }


  function handleSubmit(movie) {
    fetch(`${BASE_API_URL}/movies`, {
      method: 'post',
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json())
      .then(data => {
        setMovies([data, ...movies]);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className="row pl-4">
      <div className="col-8">
        <Header title="Movie Library" />
        <div className="row">
          {movies.length === 0 && <h5 className="text-muted pl-4 ml-1">No Result</h5>}
          {movies.map(item => (<MovieListItem key={item._id} movie={item} />))}
        </div>
      </div>

      <div className="col-4 pl-5" id="sticky-sidebar">
        <div className="sticky-top">
          <Header title="Add Movie" />
          <AddForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
export default MovieList;
