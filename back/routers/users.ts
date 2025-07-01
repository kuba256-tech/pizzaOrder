import express from 'express';
import { Error } from 'mongoose';
import User from '../models/User';
import { imagesUpload } from '../middleware/multer';

const usersRouter = express.Router();

usersRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file ? 'images' + req.file.filename : null,
      confirmPassword: req.body.confirmPassword,
    };

    console.log(newUser);

    const user = new User(newUser);
    user.generateToken();
    await user.save();

    res.status(200).send({
      message: 'Register new user',
      user,
    });
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send(error);
      return;
    }
    next(error);
  }
});

export default usersRouter;
