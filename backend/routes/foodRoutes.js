// routes/foodRoutes.js
const express = require('express');
const { searchFood, addToInventory } = require('../controllers/foodController');
const authMiddleware = require('../middlewear/authMiddleware');
const router = express.Router();

router.get('/search', searchFood);          // GET /food/search
router.post('/inventory', addToInventory);  // POST /food/inventory

module.exports = router;
