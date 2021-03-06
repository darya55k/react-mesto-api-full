const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');
const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const NotFoundError = require('./errors/not-found-err');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/https?:\/\/w{0,3}[a-z0-9-._~:?#[\]@!$&'()*+,;=]{0,}/i),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(35),
  }),
}), createUser);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

app.use(auth);

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use(errorLogger);

app.use(errors());

app.use('*', (req, res, next) => next(new NotFoundError('Ресурс не найден.')));

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).json({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });

  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
