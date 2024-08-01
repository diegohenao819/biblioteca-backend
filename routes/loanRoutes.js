const express = require('express');
const { getLoans, createLoan } = require('../controllers/loanController');

const router = express.Router();

router.get('/loans', getLoans);
router.post('/loans', createLoan);
router.delete('/loans', authenticateToken, deleteLoan);

module.exports = router;
