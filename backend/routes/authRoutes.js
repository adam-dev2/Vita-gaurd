// routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup); // POST /auth/signup
router.post('/login', login);    // POST /auth/login

module.exports = router;
