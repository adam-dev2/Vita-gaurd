// routes/foodRoutes.js
const express = require('express');
const { searchFood, addToInventory, getInventory } = require('../controllers/foodController');
const authMiddleware = require('../middlewear/authMiddleware');
const router = express.Router();

router.get('/search',authMiddleware, searchFood);         
router.post('/inventory',authMiddleware, addToInventory); 
router.get('/inventory',authMiddleware, getInventory)

module.exports = router;
