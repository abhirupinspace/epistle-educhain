const express = require('express');
const router = express.Router();
const Article = require('./models/article.model.js');

const getAllNDeleteArticles = async (req, res) => {
    try {
        // Fetch all articles
        const articles = await Article.find();
        if (!articles.length) {
            return res.status(404).json({ message: 'No articles found' });
        }

        // Collect deletion promises
        const deletionPromises = articles.map(article => Article.findByIdAndDelete(article._id));

        // Wait for all deletions to complete
        await Promise.all(deletionPromises);

        res.json({ message: 'All articles removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// Define the delete route
router.delete('/deletearticles', getAllNDeleteArticles);

module.exports = router;