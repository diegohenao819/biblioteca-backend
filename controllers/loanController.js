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

const deleteLoan = async (req, res) => {
  try {
    const { bookId, userId } = req.body;

    // Verificar que el préstamo existe
    const loan = await Loan.findOne({ where: { bookId, userId } });

    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    // Eliminar el préstamo
    await loan.destroy();

    res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLoans,
  createLoan,
  deleteLoan,
};
