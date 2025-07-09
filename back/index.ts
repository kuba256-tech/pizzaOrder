import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users';
import mongoose from 'mongoose';
import config from './config';
import pizzaRouter from './routers/pizzas';
import cookieParser from 'cookie-parser';
const mongoUri = process.env.MONGODB_URI;

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  }),
);

app.use(cookieParser())

app.use(express.json());
app.use(express.static('public'));

app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);

const run = async () => {
  await mongoose.connect(config.db);

  app.listen(port, () => {
    console.log(`Server is runnin on port http://localhost:${port}`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

run().catch((e) => {
  console.error(e);
});
