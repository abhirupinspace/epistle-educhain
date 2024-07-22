const express = require('express');
const router = express.Router();
const ArticlesController = require('../controllers/article.controller.js');

router.post('/createarticles', ArticlesController.createArticle);
router.get('/getallarticles', ArticlesController.getAllArticles);
router.get('/getarticles/:id', ArticlesController.getArticleById);
router.put('/upvotearticles/:id', ArticlesController.upVoteArticle);
router.put('/downvotearticles/:id', ArticlesController.downVoteArticle);
router.delete('/deletearticles/:id', ArticlesController.deleteArticle);

module.exports = router;
