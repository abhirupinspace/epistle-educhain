const express = require('express');
const router = express.Router();
const pointerController = require('../controllers/pointer.controller.js');

router.post('/createpointers', pointerController.createPointer);
router.get('/getallpointers', pointerController.getAllPointers);
router.get('/getpointers/:id', pointerController.getPointerById);
router.put('/updatepointers/:id', pointerController.updatePointer);
router.delete('/deletepointers/:id', pointerController.deletePointer);

module.exports = router;
