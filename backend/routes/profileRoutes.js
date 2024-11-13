// routes/profileRoutes.js
const express = require('express');
const { getNutritionSummary , clearNutritionData} = require('../controllers/profileController');
const authMiddleware = require('../middlewear/authMiddleware');
const router = express.Router();

router.get('/nutrition', authMiddleware, getNutritionSummary);
router.delete('/clear-nutrition',authMiddleware,clearNutritionData);

module.exports = router;
