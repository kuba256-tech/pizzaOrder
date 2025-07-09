import { NextFunction, Request, Response } from "express";
import { HydratedDocument } from "mongoose";

import jwt, { TokenExpiredError } from "jsonwebtoken";

import User, { JWT_SECRET } from "../models/User";
import { IUSerFields } from "../types";


export interface RequestWithUser extends Request {
  user: HydratedDocument<IUSerFields>;
}

const auth = async (expressReq: Request, res: Response, next: NextFunction) => {
  try {
    const req = expressReq as RequestWithUser;

    const jwtToken = req.cookies.token;

    if (!jwtToken) {
      res.status(401).send({ error: "No token provided." });
      return;
    }
    const decoded = jwt.verify(jwtToken, JWT_SECRET) as { _id: string };

    const user = await User.findOne({ _id: decoded._id, token: jwtToken });

    if (!user) {
      res.status(401).send({ error: "User not found or invalid token" });
      return;
    }

    req.user = user;
    next();
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      res.status(401).send({ error: "Your token expired" });
    } else {
      res.status(401).send({ error: "Please log in to authenticate" });
    }
  }
};

export default auth;