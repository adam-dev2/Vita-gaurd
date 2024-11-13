import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Card, CardContent } from '@mui/material';
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
        navigate('/food-search'); 
      }
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <Container maxWidth="sm" >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
      <Card sx={{ width: '100%', padding: 3, bgcolor: '#f5f5f5', borderRadius: 10, boxShadow: 10, marginTop: 15 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Log In
            </Typography>
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
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ bgcolor: '#81c784' }}>
                Log In
              </Button>
            </form>
            <Button color="success" onClick={() => navigate('/')} sx={{ mt: 2, width: '100%' }}>
              Don’t have an account? Sign Up
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
