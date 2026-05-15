const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const stuffController = require('../controllers/stuff');
const multer = require('../middleware/multer-config')

/**
 * @swagger
 * components:
 *   schemas:
 *     Thing:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - imageUrl
 *         - price
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         imageUrl:
 *           type: string
 *         price:
 *           type: number
 */


/**
 * @swagger
 * /api/stuff:
 *   post:
 *     summary: Create a new thing
 *     tags: [Stuff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Thing'
 *     responses:
 *       201:
 *         description: Thing created successfully
 */
router.post('/', auth, stuffController.createThing);



/**
 * @swagger
 * /api/stuff:
 *   get:
 *     summary: Get all things
 *     tags: [Stuff]
 *     responses:
 *       200:
 *         description: List of things
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Thing'
 */
router.get('/', auth, stuffController.getAllThings);


/**
 * @swagger
 * /api/stuff/{id}:
 *   get:
 *     summary: Get one thing
 *     tags: [Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thing found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Thing'
 */
router.get('/:id', auth, stuffController.getOneThing);


/**
 * @swagger
 * /api/stuff/{id}:
 *   put:
 *     summary: Update a thing
 *     tags: [Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Thing'
 *     responses:
 *       200:
 *         description: Thing updated
 */
router.put('/:id', auth, multer, stuffController.modifyThing);


/**
 * @swagger
 * /api/stuff/{id}:
 *   delete:
 *     summary: Delete a thing
 *     tags: [Stuff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thing deleted
 */
router.delete('/:id', auth, stuffController.deleteThing);


module.exports = router;