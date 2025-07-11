import express from 'express';
import { Error } from 'mongoose';
import User from '../models/User';
import { imagesUpload } from '../middleware/multer';
import auth, { RequestWithUser } from '../middleware/auth';

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

usersRouter.post('/session', async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400).send({
        error: 'email and password must be in req',
      });
      return;
    }
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).send({ error: 'Email not found' });
      return;
    }
    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) {
      res.status(400).send({ error: 'Password is incorrect' });
      return;
    }
    user.generateToken();
    await user.save();

    res.cookie('token', user.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    const safeUser = {
      _id: user._id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
    };
    res.status(200).send({
      message: 'Email and password is correct',
      user: safeUser,
    });
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(200).send({ error });
    }
    next(error);
  }
});

usersRouter.delete('/sessions', auth, async (req, res, next) => {
  const token = (req as RequestWithUser).user.token;
  if (token) {
    res.send({ message: 'Success logOut' });
    return;
  }
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  try {
    const user = await User.findOne({ token });
    if (user) {
      user.generateToken();
      await user.save();
    }
    res.send({ message: 'Success LogOut' });
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
