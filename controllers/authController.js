const bcrypt = require('bcrypt');
const { insertUser } = require('../models/userModel');

const SALT_ROUNDS = 12;

exports.showForm = (req, res) => {
  res.render('index', { title: 'Password Hasher' });
};

exports.handleHashing = async (req, res) => {
  try {
    const { email = '', password = '' } = req.body;
    if (!password)
      return res.status(400).render('index', { error: 'Password is required', title: 'Password Hasher' });

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const userDoc = {
      email: email.trim() || null,
      passwordHash: hashed,
      createdAt: new Date(),
      meta: { saltRounds: SALT_ROUNDS },
    };

    const result = await insertUser(userDoc);
    res.render('result', {
      title: 'Hash Stored',
      id: result.insertedId,
      passwordHash: hashed,
      createdAt: userDoc.createdAt,
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).render('index', { error: 'Server error', title: 'Password Hasher' });
  }
};
