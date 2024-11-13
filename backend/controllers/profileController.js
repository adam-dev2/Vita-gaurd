const { readData, writeData } = require('../config/db');  // Assuming writeData is a function to save data back to JSON

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

const clearNutritionData = async (req, res) => {
    try {
        const users = await readData('users.json');
        const user = users.find(u => u.id === req.user.id);

        if (!user) return res.status(404).json({ message: 'User not found' });
        user.inventory.forEach(item => {
            item.nutrients = {};
        });
        await writeData('users.json', users);

        res.status(200).json({ message: 'Nutrition data cleared successfully' });
    } catch (error) {
        console.error('Error clearing nutrition data:', error);
        res.status(500).json({ message: 'Error clearing nutrition data', error: error.message });
    }
};

module.exports = { getNutritionSummary, clearNutritionData };
