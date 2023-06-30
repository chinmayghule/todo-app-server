import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { baseRouter } from './routes/baseRoutes.js';

dotenv.config();

const port = 3000;
const ipAddress = '127.0.0.1';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.VITE_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// all routes
app.use('/', baseRouter);


app.listen(port, ipAddress, () => {
  console.log(`Listening on ${ipAddress}:${port}`);
});