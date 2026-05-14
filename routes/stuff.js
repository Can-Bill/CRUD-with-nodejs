const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const stuffController = require('../controllers/stuff');

router.post('/', auth, stuffController.createThing);

router.get('/', auth, stuffController.getAllThings);

router.get('/:id', auth, stuffController.getOneThing);

router.put('/:id', auth, stuffController.modifyThing);

router.delete('/:id', auth, stuffController.deleteThing);


module.exports = router;