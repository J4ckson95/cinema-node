import { Router } from "express";
import Movie from "../models/Movie.js";

const moviesRouter = Router();

moviesRouter.post("/", async (req, res, next) => {
  try {
    let one = await Movie.create(req.body);
    return res.status(201).json({
      success: true,
      response: one,
    });
  } catch (err) {
    next(err);
  }
});

moviesRouter.get("/", async (req, res, next) => {
  try {
    let all = await Movie.find();
    return res.status(200).json({ success: true, response: all });
  } catch (error) {
    next(error);
  }
});

moviesRouter.put("/:id", async (req, res, next) => {
  try {
    let one = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ success: true, response: one });
  } catch (error) {
    next(error);
  }
});

moviesRouter.delete("/:id", async (req, res, next) => {
  try {
    let one = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, response: one });
  } catch (error) {
    next(error);
  }
});

export default moviesRouter;
