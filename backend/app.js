const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const articleRoutes = require('./routes/pointer.routes.js');
const pointerRoutes = require('./routes/article.routes.js');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', articleRoutes);
app.use('/api', pointerRoutes);
// app.use('/api', userRoutes);

// const deleteRoutes = require('./deleteAllArticles.js'); //to clear off the dataset of articles
// app.use('/api', deleteRoutes); // 

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
