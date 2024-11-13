// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readData, writeData } = require('../config/db');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const signup = async (req, res) => {
    const { username, password } = req.body;
    const users = await readData('users.json');

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: uuidv4(),
        username,
        password: hashedPassword,
        inventory: []
    };

    users.push(newUser);
    await writeData('users.json', users);
    res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const users = await readData('users.json');
    const user = users.find(user => user.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
};

module.exports = { signup, login };
