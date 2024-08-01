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
      bcrypt.hash('abc', 10)
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
      { name: 'prueba', email: 'prueba@gmail.com',  password: hashedPasswords[10] },
    ]);

    // Crear libros de ejemplo
    const books = await Book.bulkCreate([
      { title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald', image: 'https://media.gettyimages.com/id/525595980/es/foto/robert-redford-in-the-great-gatsby.jpg?s=612x612&w=0&k=20&c=eVW1WNnTYuZJYFPAPqrDesvwmqg8z-croXbuxDV6Yrc=' },
      { title: 'Matar a un ruiseñor', author: 'Harper Lee', image: 'https://media.gettyimages.com/id/1097419568/es/foto/engraved-drawing-of-the-common-nightingale-from-the-book-planches-enluminees-dhistoire.jpg?s=612x612&w=0&k=20&c=A8lyuBDFxcsZ3lecWe8sjOPVb6gRhrPsWc6a-sCOS70=' },
      { title: '1984', author: 'George Orwell', image: 'https://media.gettyimages.com/id/3396793/es/foto/edmond-obrien-as-winston-smith-and-jan-sterling-as-julia-during-the-filming-of-an-adaptation-of.jpg?s=612x612&w=0&k=20&c=e0-WC4yXOYIgWygR1i48CZ4ezVBy7Q4Wv8j_BQ_UEJE=' },
      { title: 'Moby Dick', author: 'Herman Melville', image: 'https://media.gettyimages.com/id/90017344/es/foto/united-states-moby-dick.jpg?s=612x612&w=0&k=20&c=qWn8LMLn8Js_llT1cFAFaiesizO3mJuc6S4br1szKwU=' },
      { title: 'Guerra y Paz', author: 'Leo Tolstoy', image: 'https://media.gettyimages.com/id/1187603060/es/foto/commander-in-chief-surveying-the-field-of-victory-1916-from-the-war-illustrated-album-de-luxe.jpg?s=612x612&w=0&k=20&c=cd90o-tvqiQ6W4e6wFcaSd6DR5gE3oFEP3oSZbXmSfg=' },
      { title: 'Orgullo y Prejuicio', author: 'Jane Austen', image: 'https://media.gettyimages.com/id/1431005313/es/foto/pride-and-prejudice-by-jane-austen-portrait-of-lady-lucas-chapter-v-caption-reads-lady-lucas.jpg?s=612x612&w=0&k=20&c=eIBR_M4H5H3Vd1y_zG15QpxiC2g6QFRinx396L9MzZI=' },
      { title: 'El Guardián entre el Centeno', author: 'J.D. Salinger', image: 'https://th.bing.com/th/id/R.78d6a2e6242b59e0a9397423ffc806a2?rik=h%2bU01dtyVxWBlw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-19-7Xul0zIQ%2fVqWSvCOqZLI%2fAAAAAAAAAwY%2fHhtedp3eXK0%2fs1600%2fguardian-entre-el-centeno-portada.jpg&ehk=B%2b3wOOGAQtXbiAdQEhnEW3XFppKz2wCDayI1Lg7%2bawo%3d&risl=&pid=ImgRaw&r=0' },
      { title: 'El Hobbit', author: 'J.R.R. Tolkien', image: 'https://media.gettyimages.com/id/538078892/es/foto/doksy-czech-republic-a-participant-represent-frodo-character-from-the-hobbit-book-by-j-r-r.jpg?s=612x612&w=0&k=20&c=oirIuaBOdE0UHrKIiL3L4x-k3_FsTMwBdZVZC12feCo=' },
      { title: 'Crimen y Castigo', author: 'Fyodor Dostoevsky', image: 'https://media.gettyimages.com/id/931723856/es/foto/the-police-arrested-the-police-the-six-prisoners-were-taken-into-a-parlour-at-the-railway.jpg?s=612x612&w=0&k=20&c=2pkNaUIuHz6ZnSck5Xgdn1SDDPwXyFNqY3r7vO6xO-I=' },
      { title: 'Un Mundo Feliz', author: 'Aldous Huxley', image: 'https://m.media-amazon.com/images/I/61Phad+-7XL._AC_UY654_QL65_.jpg' },
    ]);

    // Crear préstamos de ejemplo
    // const loans = await Loan.bulkCreate([
    //   { userId: users[0].id, bookId: books[0].id, loanDate: new Date(), returnDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000) },
    //   { userId: users[1].id, bookId: books[1].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000) },
    //   { userId: users[2].id, bookId: books[2].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    //   { userId: users[3].id, bookId: books[3].id, loanDate: new Date(), returnDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
    //   { userId: users[4].id, bookId: books[4].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
    //   { userId: users[5].id, bookId: books[5].id, loanDate: new Date(), returnDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
    //   { userId: users[6].id, bookId: books[6].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
    //   { userId: users[7].id, bookId: books[7].id, loanDate: new Date(), returnDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
    //   { userId: users[8].id, bookId: books[8].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    //   { userId: users[9].id, bookId: books[9].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000) },
    //   { userId: users[0].id, bookId: books[1].id, loanDate: new Date(), returnDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000) },
    //   { userId: users[1].id, bookId: books[2].id, loanDate: new Date(), returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    //   { userId: users[2].id, bookId: books[3].id, loanDate: new Date(), returnDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) },
    //   { userId: users[3].id, bookId: books[4].id, loanDate: new Date(), returnDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
    //   { userId: users[4].id, bookId: books[5].id, loanDate: new Date(), returnDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000) },
    //   { userId: users[5].id, bookId: books[6].id, loanDate: new Date(), returnDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000) },
    //   { userId: users[6].id, bookId: books[7].id, loanDate: new Date(), returnDate: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000) },
    //   { userId: users[7].id, bookId: books[8].id, loanDate: new Date(), returnDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000) },
    //   { userId: users[8].id, bookId: books[9].id, loanDate: new Date(), returnDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000) },
    //   { userId: users[9].id, bookId: books[0].id, loanDate: new Date(), returnDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) },
    // ]);

    console.log('Base de datos poblada exitosamente.');
  } catch (error) {
    console.error('Error populando la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
