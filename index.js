import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './api-routes';

const app = express();

const { 
  PORT = 8080,
  DATABASE_URL
} = process.env;

console.log(DATABASE_URL)
app.use(bodyParser.urlencoded({ extended: true}));
mongoose.connect(DATABASE_URL, {userNewUrlParser: true });
const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Hello world from express');
});
app.use('/api', apiRoutes)

app.listen(PORT, function() {
  console.log('Resthub running on port' + PORT);
})