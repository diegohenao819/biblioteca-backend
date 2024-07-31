const sequelize = require('./config/database');
const User = require('./models/User');
const Book = require('./models/Book');
const Loan = require('./models/Loan');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea las tablas

    // Hashear las contraseñas
    const hashedPasswords = await Promise.all([
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
      bcrypt.hash('password123', 10),
    ]);

    // Crear usuarios de ejemplo
    const users = await User.bulkCreate([
      { name: 'John Doe', email: 'john.doe@example.com', password: hashedPasswords[0] },
      { name: 'Jane Smith', email: 'jane.smith@example.com', password: hashedPasswords[1] },
      { name: 'Alice Johnson', email: 'alice.johnson@example.com', password: hashedPasswords[2] },
      { name: 'Robert Brown', email: 'robert.brown@example.com', password: hashedPasswords[3] },
      { name: 'Emily Davis', email: 'emily.davis@example.com', password: hashedPasswords[4] },
      { name: 'Michael Wilson', email: 'michael.wilson@example.com', password: hashedPasswords[5] },
      { name: 'Sarah Miller', email: 'sarah.miller@example.com', password: hashedPasswords[6] },
      { name: 'David Moore', email: 'david.moore@example.com', password: hashedPasswords[7] },
      { name: 'Laura Taylor', email: 'laura.taylor@example.com', password: hashedPasswords[8] },
      { name: 'James Anderson', email: 'james.anderson@example.com', password: hashedPasswords[9] },
    ]);

    // Crear libros de ejemplo
    const books = await Book.bulkCreate([
      { title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'Matar a un ruiseñor', author: 'Harper Lee' },
      { title: '1984', author: 'George Orwell' },
      { title: 'Moby Dick', author: 'Herman Melville' },
      { title: 'Guerra y Paz', author: 'Leo Tolstoy' },
      { title: 'Orgullo y Prejuicio', author: 'Jane Austen' },
      { title: 'El Guardián entre el Centeno', author: 'J.D. Salinger' },
      { title: 'El Hobbit', author: 'J.R.R. Tolkien' },
      { title: 'Crimen y Castigo', author: 'Fyodor Dostoevsky' },
      { title: 'Un Mundo Feliz', author: 'Aldous Huxley' },
    ]);

    // Crear préstamos de ejemplo
    const loans = await Loan.bulkCreate([
      { userId: users[0].id, bookId: books[0].id, loanDate: new Date(), returnDate: new Date(Date.now() + 8*24*60*60*1000) },
      { userId: users[1].id, bookId: books[1].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9*24*60*60*1000) },
      { userId: users[2].id, bookId: books[2].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7*24*60*60*1000) },
      { userId: users[3].id, bookId: books[3].id, loanDate: new Date(), returnDate: new Date(Date.now() + 6*24*60*60*1000) },
      { userId: users[4].id, bookId: books[4].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5*24*60*60*1000) },
      { userId: users[5].id, bookId: books[5].id, loanDate: new Date(), returnDate: new Date(Date.now() + 4*24*60*60*1000) },
      { userId: users[6].id, bookId: books[6].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5*24*60*60*1000) },
      { userId: users[7].id, bookId: books[7].id, loanDate: new Date(), returnDate: new Date(Date.now() + 3*24*60*60*1000) },
      { userId: users[8].id, bookId: books[8].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7*24*60*60*1000) },
      { userId: users[9].id, bookId: books[9].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9*24*60*60*1000) },
      { userId: users[0].id, bookId: books[1].id, loanDate: new Date(), returnDate: new Date(Date.now() + 8*24*60*60*1000) },
      { userId: users[1].id, bookId: books[2].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7*24*60*60*1000) },
      { userId: users[2].id, bookId: books[3].id, loanDate: new Date(), returnDate: new Date(Date.now() + 6*24*60*60*1000) },
      { userId: users[3].id, bookId: books[4].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5*24*60*60*1000) },
      { userId: users[4].id, bookId: books[5].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9*24*60*60*1000) },
      { userId: users[5].id, bookId: books[6].id, loanDate: new Date(), returnDate: new Date(Date.now() + 12*24*60*60*1000) },
      { userId: users[6].id, bookId: books[7].id, loanDate: new Date(), returnDate: new Date(Date.now() + 11*24*60*60*1000) },
      { userId: users[7].id, bookId: books[8].id, loanDate: new Date(), returnDate: new Date(Date.now() + 20*24*60*60*1000) },
      { userId: users[8].id, bookId: books[9].id, loanDate: new Date(), returnDate: new Date(Date.now() + 13*24*60*60*1000) },
      { userId: users[9].id, bookId: books[0].id, loanDate: new Date(), returnDate: new Date(Date.now() + 14*24*60*60*1000) },
    ]);

    console.log('Base de datos poblada exitosamente.');
  } catch (error) {
    console.error('Error populando la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
