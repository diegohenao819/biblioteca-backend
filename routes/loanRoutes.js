const express = require('express');
const { getLoans, createLoan, deleteLoan } = require('../controllers/loanController');
const authenticateToken = require('../middlewares/authMiddleware'); // Importa el middleware de autenticación
const router = express.Router();

// Obtener todos los préstamos
router.get('/loans', authenticateToken, getLoans);

// Crear un nuevo préstamo
router.post('/loans', authenticateToken, createLoan);

// Eliminar un préstamo
router.delete('/loans', authenticateToken, deleteLoan);

module.exports = router;
