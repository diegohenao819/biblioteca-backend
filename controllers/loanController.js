const Loan = require('../models/Loan');

const getLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLoan = async (req, res) => {
  try {
    const loan = await Loan.create(req.body);
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLoans,
  createLoan,
};
