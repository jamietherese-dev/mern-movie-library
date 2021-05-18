import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import movieRoutes from './routes/movies.route.js';

// Load our .env file and add the values to process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/movies/', movieRoutes);

const DB_URI = process.env.DB_URI;
console.log('DB', DB_URI);

mongoose.connect(DB_URI, {useNewUrlParser: true,  useFindAndModify: false, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connection Successful'))
    .catch((err) => console.log(`Error: ${err}`))

app.get('/', (req, res) => res.send('Welcome to MERN Stack!'));

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
