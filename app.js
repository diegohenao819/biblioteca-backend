const express = require('express');

require('dotenv').config();
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');
const logger = require('./middlewares/logger');
const User = require('./models/User');
const Book = require('./models/Book');
const Loan = require('./models/Loan');
const cors = require('cors');


const app = express();

const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));


// Middleware
app.use(bodyParser.json());
app.use(logger);

// Rutas
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', loanRoutes);





const PORT = process.env.PORT || 3000;
// Sincronizar base de datos y arrancar el servidorrewrerertewwerwerwer
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
