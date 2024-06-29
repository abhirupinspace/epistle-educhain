const express = require('express');
const router = express.Router();
const ArticlesController = require('../controllers/article.controller.js');

router.post('/createarticles', ArticlesController.createArticles);
router.get('/getallarticles', ArticlesController.getAllArticles);
router.get('/getarticles/:id', ArticlesController.getArticlesById);
router.put('/updatearticles/:id', ArticlesController.updateArticles);
router.delete('/deletearticles/:id', ArticlesController.deleteArticles);

module.exports = router;
