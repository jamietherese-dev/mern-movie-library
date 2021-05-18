import Movie from "../models/movie.model.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: "desc" });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  const movie = req.body;
  console.log("movie", movie);
  const newMovie = new Movie(movie);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  console.log("req.params", req.params);
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json("Movie deleted.");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
