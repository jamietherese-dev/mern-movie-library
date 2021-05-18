import express from "express";
import { createMovie, deleteMovie, getMovies } from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getMovies);

router.post("/", createMovie);

router.delete("/:id", deleteMovie);

export default router;
