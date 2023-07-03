const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(403).json({ message: 'Username or password is empty' });
      return;
    }
  } catch (err) {
    next(err);
  }
};

module.exports = login;
