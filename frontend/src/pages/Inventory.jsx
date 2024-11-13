import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import NavBar from '../components/NavBar';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
    const fetchInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/food/inventory', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setInventory(response.data);
      } catch (error) {
        setError('Error fetching inventory');
      }
    };

    fetchInventory();
  }, [navigate]);

  return (
    <>
    <NavBar />
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" marginBottom='5%'>Your Inventory</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={2}>
          {inventory.map((food, idx) => (
            <FoodCard key={idx} food={food} />
          ))}
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Inventory;
