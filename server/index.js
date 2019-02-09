const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/article');

const app = express();
dotenv.config();

const {
  DB_HOST,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;


const mongoURI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to mongo server."))


app.use('/api/articles', articleRoutes);


app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running'));
