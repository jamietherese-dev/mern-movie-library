/**
 * Script for seeding mongoDB database
 * 
 *  
 * (Default) To seed and drop collection data:
 * node seeder.js
 * or 
 * npm run seed
 * 
 * To seed without dropping the collection:
 * node seeder.js false 
 * or
 * npm run seed -- false
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "./models/movie.model.js";

dotenv.config();
const DB_URI = process.env.DB_URI;
const RESET_DB = process.argv[2] || true;

const data = [
  {
    title: "Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    releaseYear: 1997,
    runningTime: 195,
    genres: ["Romance"],
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png",
  },
  {
    title: "Minority Report",
    description:
      "A future technology makes it possible for cops to catch criminals before a crime is committed.",
    releaseYear: 2002,
    runningTime: 145,
    genres: ["Thriller", "Science Fiction"],
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Minority_Report_Poster.jpg",
  },
  {
    title: "Parasite",
    description:
      "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
    releaseYear: 2019,
    runningTime: 132,
    genres: ["Thriller", "Black Comedy"],
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
  },
  {
    title: "Joker",
    description:
      "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
    releaseYear: 2019,
    runningTime: 122,
    genres: ["Crime", "Drama"],
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
  },

];

async function seedDatabase(shouldReset) {

  // Connect to db
  const options = {useNewUrlParser: true,  useFindAndModify: false, useUnifiedTopology: true};

  try {
    await mongoose.connect(DB_URI, options);
    console.log('MongoDB Connection Successful')

    if (shouldReset) {
      try {
        await Movie.collection.drop();
      } catch (error) {
        console.log('Unable to drop the collection')
      }
    }

    await Movie.insertMany(data);
    console.log('Seeding Successful')

  } catch (error) {
    console.error(`Error: ${error}`)
  }

  process.exit();
}


seedDatabase(RESET_DB);
