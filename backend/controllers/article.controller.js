const Article = require('../models/article.model.js');

// Function to find article by ID and handle errors
const findArticleById = async (id, res) => {
  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    return article;
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(500).send('Server Error');
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getArticleById = async (req, res) => {
  const article = await findArticleById(req.params.id, res);
  if (article) res.json(article);
};

const createArticle = async (req, res) => {
  const { heading, subheading, description, genre, location, link, uploadMedia } = req.body;

  try {
    const newArticle = new Article({
      heading,
      subheading,
      description,
      genre,
      location,
      link,
      uploadMedia,
      time: new Date(),
      upVote: 0,
      downVote: 0
    });

    const article = await newArticle.save();
    res.status(201).json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const upVoteArticle = async (req, res) => {
  const article = await findArticleById(req.params.id, res);
  if (article) {
    article.upVote = (article.upVote || 0) + 1;
    await article.save();
    res.json(article);
  }
};

const downVoteArticle = async (req, res) => {
  const article = await findArticleById(req.params.id, res);
  if (article) {
    article.downVote = (article.downVote || 0) + 1;
    await article.save();
    res.json(article);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Error occurred' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  upVoteArticle,
  downVoteArticle,
  deleteArticle,
};
