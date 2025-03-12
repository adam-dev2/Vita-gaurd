import { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import NavBar from '../components/NavBar';

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const handleClearNutrition = async () => {
    try {
      await axios.delete('http://localhost:5000/profile/clear-nutrition', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setNutrition({}); 
    } catch (error) {
      setError('Error clearing nutrition data');
    }
  };

  const pieData = {
    labels: Object.keys(nutrition),
    datasets: [
      {
        data: Object.values(nutrition),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
      },
    ],
  };

  return (
    <>
      <NavBar />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4">Nutrition Summary</Typography>
          {error && <Typography color="error">{error}</Typography>}
          {Object.keys(nutrition).length ? (
            <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
              <Pie data={pieData} />
            </Box>
          ) : (
            <Typography>No nutrition data available</Typography>
          )}
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleClearNutrition} 
            sx={{ mt: 3 }}
          >
            Clear Nutrition Data
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
