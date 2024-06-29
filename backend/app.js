const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const articleRoutes = require('./routes/article.routes.js');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', articleRoutes);
// app.use('/api', reviewRoutes);
// app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke!');
});

module.exports = app;
