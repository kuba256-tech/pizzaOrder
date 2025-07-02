import express from 'express';
import Pizza from '../models/Pizza';
import { Error } from 'mongoose';

const pizzaRouter = express.Router();

pizzaRouter.get('/', async (req, res, next) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).send(pizzas);
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send({ error });
    }
    next(error);
  }
});

export default pizzaRouter;
