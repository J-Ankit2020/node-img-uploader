import express from 'express';
import uploadRoute from './routes/upload.js';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlewares/error.js';
import path from 'path';
import cors from 'cors';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Serving public directory
app.use(express.static(path.join(path.resolve(), './public')));

// parse application/json
app.use(bodyParser.json());

app.use(uploadRoute);
app.use(errorMiddleware);

export default app;
