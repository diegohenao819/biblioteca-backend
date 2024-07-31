const express = require('express');
const { getBooks, createBook } = require('../controllers/bookController');

const router = express.Router();

router.get('/books', getBooks);
router.post('/books', createBook);

module.exports = router;
