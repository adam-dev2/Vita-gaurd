import { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FoodCard from '../components/FoodCard';

const FoodSearch = () => {
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(`http://localhost:5000/food/search?query=${query}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setFoods(response.data);
    } catch (error) {
      setError('No foods found');
    }
  };

  const addToInventory = async (foodName) => {
    try {
      await axios.post('http://localhost:5000/food/inventory', { foodName }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Food item added to inventory!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Search for Food</Typography>
        <TextField
          label="Search for Food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button onClick={handleSearch} variant="contained" color="primary" sx={{ mb: 3 }}>
          Search
        </Button>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={2}>
          {foods.map((food, idx) => (
            <FoodCard key={idx} food={food} addToInventory={addToInventory} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FoodSearch;
