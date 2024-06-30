const Pointer = require('../models/pointer.model.js');

const getAllPointers = async (req, res) => {
    try {
      const Pointers = await Pointer.find();
      res.json(Pointers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  const getPointerById = async (req, res) => {
    try {
      const Pointers = await Pointer.findById(req.params.id);
      
      if (!Pointers) {
        return res.status(404).json({ message: 'Pointer not found' });
      }
      
      res.json(Pointers);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Articles not found' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  const createPointer = async (req, res) => {
    const { lat, lng, point} = req.body;
  
    try {
      const newPointer = new Pointer({lat, lng, point});
      const Pointers = await newPointer.save();
      res.status(201).json(Pointers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  const updatePointer = async (req, res) => {
    const {lat, lng, point}= req.body;
  
    try {
      let Pointers = await Pointer.findById(req.params.id);
  
      if (!Pointers) {
        return res.status(404).json({ message: 'Articles not found' });
      }
  
      Pointers.lat = lat;
      Pointers.lng = lng;
      Pointers.point = point;
  
      Pointers = await Pointer.save();
      res.json(Pointers);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Articles not found' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  const deletePointer = async (req, res) => {
    try {
      const Pointers = await Pointer.findByIdAndDelete(req.params.id);
  
      if (!Pointers) {
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
    getAllPointers,
    getPointerById,
    updatePointer,
    createPointer,
    deletePointer,
  };