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

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;
