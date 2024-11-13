// Login.js
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/food-search'); // Redirect to dashboard after login
      }
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <Container >
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Log In</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{bgcolor:'#81c784'}}>
            Log In
          </Button>
        </form>
        <Button color='success' onClick={() => navigate('/')}  sx={{ mt: 2 }}>
          Don’t have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
