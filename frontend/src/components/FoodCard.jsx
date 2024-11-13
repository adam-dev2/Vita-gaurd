import { Card, CardContent, Typography, Button, Grid2 } from '@mui/material';

const FoodCard = ({ food, addToInventory }) => {
  return (
    <Grid2 item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">{food.name}</Typography>
          <Typography variant="body2">Protein: {food.nutrients}</Typography>
          <Button variant="contained" onClick={() => addToInventory(food.name)} sx={{ mt: 2 }}>
            Add to Inventory
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default FoodCard;
