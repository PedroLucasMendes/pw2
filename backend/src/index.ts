

import express from "express";
import getEnv from "./utils/getEnv";
import router from "./router/router";
import cookieParser from 'cookie-parser';
import setLangCookie from './middlewares/setLangCookie';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

declare module "express-session" {
  interface SessionData {
    userType: string;
    userId: string;
  }
}

const env = getEnv();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(setLangCookie);
app.use(
  session({
    genid: () => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(router);

app.listen(env.PORT, () => {
  console.log(`App running on port ${env.PORT}.`);
});
