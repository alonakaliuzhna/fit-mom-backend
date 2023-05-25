const express = require('express');

const swaggerUi = require('swagger-ui-express');
const docs = require('./docs');

const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

const usersRouter = require('./routes/api/users');
const daysRouter = require('./routes/api/days');
const productsRouter = require('./routes/api/products');
const publicRouter = require('./routes/api/public');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use('/api/users', usersRouter);
app.use('/api/days', daysRouter);
app.use('/api/products', productsRouter);
app.use('/api/public', publicRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
