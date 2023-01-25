import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js';

mongoose.set('strictQuery', true);

const app = express();
dotenv.config();



app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/',(req,res) => {
  res.send('HELLO TO MEMORIES API BRO');
})

 
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT||5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



