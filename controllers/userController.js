const User = require('../models/User');
const Book = require('../models/Book');
const Loan = require('../models/Loan');
const { Op } = require('sequelize');


// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una cantidad específica de usuarios con paginación
const getUsersWithPagination = async (req, res) => {
  const { page, pageSize } = req.query;
  const limit = parseInt(pageSize) || 10; // Número de usuarios por página
  const offset = (parseInt(page) - 1) * limit || 0; // Calcular el offset

  try {
    const users = await User.findAndCountAll({
      limit,
      offset
    });
    res.json({
      totalItems: users.count,
      totalPages: Math.ceil(users.count / limit),
      currentPage: parseInt(page) || 1,
      data: users.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Obtener nombre del usuario, correo y libro prestado
const getUsersWithLoans = async (req, res) => {
  try {
    const usersWithLoans = await User.findAll({
      include: [{
        model: Loan,
        include: [{
          model: Book,
          attributes: ['title', 'author']
        }],
        attributes: ['loanDate', 'returnDate']
      }],
      attributes: ['name', 'email']
    });
    res.json(usersWithLoans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Obtener los libros prestados de un usuario específico por ID de usuario
const getUserLoans = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{
        model: Loan,
        include: [{
          model: Book,
          attributes: ['title', 'author']
        }],
        attributes: ['loanDate', 'returnDate']
      }],
      attributes: ['name', 'email']
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const searchUsers = async (req, res) => {
  const { query } = req.query; // Obtener el parámetro de búsqueda

  try {
    const users = await User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } }
        ]
      },
      attributes: ['id', 'name', 'email'] // Excluir la contraseña
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUsersWithPagination,
  getUsersWithLoans, 
  getUserLoans,
  searchUsers
};

