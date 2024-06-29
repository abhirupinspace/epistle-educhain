const Article = require('../models/article.model.js');

// const filteredArticles = allArticles.filter(article => {
//     return article.title.includes(searchText) || article.content.includes(searchText);
// });


const getAllArticles = async (req, res) => {
    try {
      const Articles = await Article.find();
      res.json(Articles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  const getArticlesById = async (req, res) => {
    try {
      const Articles = await Articles.findById(req.params.id);
      
      if (!Articles) {
        return res.status(404).json({ message: 'Articles not found' });
      }
      
      res.json(Articles);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Articles not found' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  const createArticles = async (req, res) => {
    const { heading, subheading, description, genre, location, link, uploadMedia} = req.body;
  
    try {
      const newArticles = new Article({heading, subheading, description, genre, location, link, uploadMedia});
      newArticles.time = new Date();
      const Articles = await newArticles.save();
      res.status(201).json(Articles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  const updateArticles = async (req, res) => {
    const { title, content } = req.body;
  
    try {
      let Articles = await Articles.findById(req.params.id);
  
      if (!Articles) {
        return res.status(404).json({ message: 'Articles not found' });
      }
  
      Articles.title = title;
      Articles.content = content;
  
      Articles = await Articles.save();
      res.json(Articles);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Articles not found' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  const deleteArticles = async (req, res) => {
    try {
      const Articles = await Articles.findByIdAndDelete(req.params.id);
  
      if (!Articles) {
        return res.status(404).json({ message: 'Articles not found' });
      }
      res.json({ message: 'Articles removed' });
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
    getArticlesById,
    createArticles,
    updateArticles,
    deleteArticles,
  };