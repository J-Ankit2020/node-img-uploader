import { config } from 'dotenv';
config();
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
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/public')));

// parse application/json
app.use(bodyParser.json());

app.use(uploadRoute);
app.use(errorMiddleware);

export default app;
