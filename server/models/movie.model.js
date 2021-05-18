import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: {type: String, required: true },
    runningTime: { type: Number, required: true },
    releaseYear: { type: Number, required: true },
    genres: { type: [String]},
    avatar: { type: String }
}, {
  timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema)

export default Movie;
