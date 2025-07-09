import express from 'express';
import Pizza from '../models/Pizza';
import { Error } from 'mongoose';

const pizzaRouter = express.Router();

pizzaRouter.get('/', async (req, res, next) => {
    let {sort, order} = req.query
    const orderBy = order === "asc" ? 1 : -1 
    sort = !sort ? "title" :sort as string

  try {
    let pizzas = await Pizza.find().sort({[sort]:orderBy});
    res.status(200).send(pizzas);
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send({ error });
    }
    next(error);
  }
});

export default pizzaRouter;
