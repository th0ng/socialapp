/* eslint-disable object-curly-newline */
const bcrypt = require('bcrypt');

const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('posts');
  res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const { username, email, name, password, birthday } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    email,
    name,
    passwordHash,
    birthday,
  });

  const savedUser = await user.save();

  res.status(201).json(savedUser);
});

module.exports = usersRouter;
