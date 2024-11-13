import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup/login
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? 'http://localhost:5000/auth/signup' : 'http://localhost:5000/auth/login';
    try {
      const response = await axios.post(url, formData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/food-search');
      }
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">{isSignup ? 'Sign Up' : 'Log In'}</Typography>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isSignup ? 'Sign Up' : 'Log In'}
          </Button>
        </form>
        <Button onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2 }}>
          {isSignup ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
