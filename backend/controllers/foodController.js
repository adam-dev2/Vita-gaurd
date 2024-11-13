// controllers/foodController.js
const { readData, writeData } = require('../config/db');

const searchFood = async (req, res) => {
    const { query } = req.query;
    const foods = await readData('food.json');
    // console.log(foods)
    const results = foods.filter(food => 
        food.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(results)
    res.json(results);
};

const addToInventory = async (req, res) => {
    const { foodName } = req.body;
    const foods = await readData('food.json');
    const users = await readData('users.json');
    const user = users.find(u => u.id === req.user.id);
    console.log(foodName)

    const foodItem = foods.find(f => f.name.toLowerCase() === foodName.toLowerCase());

    if (!foodItem) return res.status(404).json({ message: 'Food item not found' });

    user.inventory.push(foodItem);
    await writeData('users.json', users);

    res.json({ message: 'Food item added to inventory', foodItem });
};


const getInventory = async (req, res) => {
  try {
    const users = await readData('users.json');
    const user = users.find(u => u.id === req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.inventory);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { searchFood, addToInventory, getInventory };
