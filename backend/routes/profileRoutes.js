// routes/profileRoutes.js
const express = require('express');
const { getNutritionSummary } = require('../controllers/profileController');
const authMiddleware = require('../middlewear/authMiddleware');
const router = express.Router();

router.get('/nutrition', authMiddleware, getNutritionSummary); // GET /profile/nutrition

module.exports = router;
