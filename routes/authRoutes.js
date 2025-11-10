const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.showForm);
router.post('/hash', authController.handleHashing);

module.exports = router;
