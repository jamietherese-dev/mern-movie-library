import Movie from '../models/movie.model.js';

export const getMovies = async (req, res) => { 
  try {
    const movies = await Movie.find().sort({createdAt: 'desc'});
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({message: error.message });
  }
}