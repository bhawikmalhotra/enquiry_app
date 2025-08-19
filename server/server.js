import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import enquiryroute from './app/routes/web/enqiryroute.js'; 

let app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URI).then(() => {console.log('Connected to MongoDB')})

app.use('/api', enquiryroute);

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});