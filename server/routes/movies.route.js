import express from 'express';
import { getMovies } from '../controllers/movies.controller.js';
import Movie from '../models/movie.model.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', async (req, res) => {
  const movie = req.body;
  console.log('movie', movie);
  const newMovie = new Movie(movie);
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  console.log('req.params', req.params);
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json('Movie deleted.');
  } catch (error) {
    res.status(400).json({message: error.message });
  }
});


export default router;
