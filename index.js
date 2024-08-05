require('dotenv').config({ path: '../.env' }); // Adjust path if needed
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

console.log('Mongo URI:', mongoUri);
console.log('JWT Secret:', process.env.JWT_SECRET);
console.log('Port:', port);

if (!mongoUri) {
  console.error('MONGO_URI is not defined in .env file');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch(err => console.error('Failed to connect to MongoDB', err));
