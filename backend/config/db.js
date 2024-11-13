// config/db.js
const fs = require('fs').promises;
const path = require('path');

const readData = async (file) => {
    const data = await fs.readFile(path.join(__dirname, '../data', file), 'utf-8');
    return JSON.parse(data);
};

const writeData = async (file, data) => {
    await fs.writeFile(path.join(__dirname, '../data', file), JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
