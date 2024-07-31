const express = require('express');
const { getUsers, createUser, getUserById, updateUser, deleteUser, getUsersWithLoans, getUsersWithPagination, getUserLoans, searchUsers } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/users', authMiddleware, getUsers);
router.post('/users', authMiddleware, createUser);
router.get('/users/:id', authMiddleware, getUserById);
router.put('/users/:id', authMiddleware, updateUser);
router.delete('/users/:id', authMiddleware, deleteUser);

// Nueva ruta para obtener usuarios con sus préstamos
router.get('/users-with-loans', authMiddleware, getUsersWithLoans);

// Ruta para obtener usuarios con paginación
router.get('/users/paginate', authMiddleware, getUsersWithPagination);

// Ruta para obtener los préstamos de un usuario específico
router.get('/users/:id/loans', authMiddleware, getUserLoans);

router.get('/search-users', authMiddleware, searchUsers);

module.exports = router;
