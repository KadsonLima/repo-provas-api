import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';
import "express-async-errors";
import errorHandler from './middlewares/erroHandler';
import router from './routers/routes';




dotenv.config()

const app = express()
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

export default app

