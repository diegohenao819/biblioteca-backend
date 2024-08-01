const Book = require('../models/Book');
const Loan = require('../models/Loan');

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: Loan,
          attributes: ['id', 'userId', 'loanDate', 'returnDate'],
          required: false, 
        },
      ],
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBooks,
  createBook,
};
