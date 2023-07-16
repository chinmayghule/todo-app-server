import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { baseRouter } from './routes/baseRoutes.js';

dotenv.config();

const port = 5000;
const ipAddress = '127.0.0.1';

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
    // res.status(404).json({message: 'wrong link'});
    res.status(404).send("<h1>404 Not Found</h1>");
  });
  


app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on ${ipAddress}:${port}`);
});

// const server = app.listen(() => {
//   const { address, port } = server.address();
//   console.log(`Server running on ${address}:${port}`);
// });