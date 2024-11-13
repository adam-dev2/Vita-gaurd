import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [nutrition, setNutrition] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }

    const fetchNutrition = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile/nutrition', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setNutrition(response.data);
      } catch (error) {
        setError('Error fetching nutrition data');
      }
    };

    fetchNutrition();
  }, [navigate]);

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4">Nutrition Summary</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={2}>
          {Object.keys(nutrition).length ? (
            Object.entries(nutrition).map(([nutrient, value]) => (
              <Grid item xs={12} sm={6} md={4} key={nutrient}>
                <Paper sx={{ padding: 2 }}>
                  <Typography variant="h6">{nutrient}</Typography>
                  <Typography variant="body1">{value}</Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography>No nutrition data available</Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
