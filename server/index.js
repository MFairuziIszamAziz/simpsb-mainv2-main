import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/simpsb_db');

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Terhubung...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}...`)
});