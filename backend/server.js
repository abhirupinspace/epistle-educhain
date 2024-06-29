const dotenv = require('dotenv');
const app = require('./app.js');
const mongoose = require('mongoose');
dotenv.config();

const PORT = process.env.PORT || 3000;

const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,  // Remove this line
  useUnifiedTopology: true // Remove this line
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

