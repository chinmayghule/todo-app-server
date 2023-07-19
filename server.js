import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { baseRouter } from './routes/baseRoutes.js';

dotenv.config();

const port = 3000;
const ipAddress = '192.168.43.210';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.VITE_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected!");
    // Output the database name
    console.log(`Connected to database: ` +
      `${mongoose.connection.db.databaseName}`
    );
  })
  .catch(err => console.log(err));

  
  // all routes
  app.use('/', baseRouter);
  
  app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
  });
  


app.listen(port, ipAddress, () => {
  console.log(`Listening on ${ipAddress}:${port}`);
});