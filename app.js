const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const logger = require('./middlewares/logger');
const User = require('./models/User');
const Book = require('./models/Book');
const Loan = require('./models/Loan');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Rutas
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 3000;
// Sincronizar base de datos y arrancar el servidorrewrerertew
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
