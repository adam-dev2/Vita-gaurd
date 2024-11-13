const axios = require('axios');

// Base URL of your backend
const baseURL = 'http://localhost:5000';

// Define your test user data
const testUser = {
  username: 'testuser',
  email: 'testuser@example.com',
  password: 'password123',
};

// Function to test each endpoint
const testEndpoints = async () => {
  try {
    // Test /auth/signup
    console.log('Testing /auth/signup...');
    const signupResponse = await axios.post(`${baseURL}/auth/signup`, testUser);
    console.log(`Signup success: ${signupResponse.status}`);

    // Test /auth/login
    console.log('Testing /auth/login...');
    const loginResponse = await axios.post(`${baseURL}/auth/login`, {
      email: testUser.email,
      password: testUser.password,
    });
    const token = loginResponse.data.token; // Save the token
    console.log(`Login success: ${loginResponse.status}`);

    // Test /food/search
    console.log('Testing /food/search...');
    const searchResponse = await axios.get(`${baseURL}/food/search?query=potato`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`Food search success: ${searchResponse.status}`);
    
    // Test /food/inventory (Add to inventory)
    console.log('Testing /food/inventory (Add to inventory)...');
    const foodToAdd = { foodName: 'Potato' };
    const inventoryAddResponse = await axios.post(`${baseURL}/food/inventory`, foodToAdd, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`Add to inventory success: ${inventoryAddResponse.status}`);

    // Test /food/inventory (Get inventory)
    console.log('Testing /food/inventory (Get inventory)...');
    const inventoryResponse = await axios.get(`${baseURL}/food/inventory`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`Get inventory success: ${inventoryResponse.status}`);

    // Test /profile/nutrition
    console.log('Testing /profile/nutrition...');
    const profileResponse = await axios.get(`${baseURL}/profile/nutrition`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(`Nutrition summary success: ${profileResponse.status}`);
    
  } catch (error) {
    if (error.response) {
      console.error(`Error with status ${error.response.status}: ${error.response.data}`);
    } else {
      console.error('Error:', error.message);
    }
  }
};

// Run the test
testEndpoints();
