// controllers/profileController.js
const { readData } = require('../config/db');

const getNutritionSummary = async (req, res) => {
    const users = await readData('users.json');
    const user = users.find(u => u.id === req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const summary = user.inventory.reduce((acc, item) => {
        for (let [nutrient, value] of Object.entries(item.nutrients)) {
            acc[nutrient] = (acc[nutrient] || 0) + parseFloat(value) || 0;
        }
        return acc;
    }, {});

    res.json(summary);
};

module.exports = { getNutritionSummary };
