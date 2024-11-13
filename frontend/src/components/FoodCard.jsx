import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const FoodCard = ({ food, addToInventory }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{food.name}</Typography>
        
        <Typography variant="body2">
          {food.nutrients 
            ? Object.entries(food.nutrients).map(([key, value]) => (
                <div key={key}>
                  {key}: {value}
                </div>
              ))
            : <div>No nutrient data available</div>
          }
        </Typography>
        
        <Button variant="contained" onClick={() => addToInventory(food.name)}>
          Add to Inventory
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
