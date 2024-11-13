import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky" color='success'>
      <Toolbar>
          <img src='/logo.png' alt="logo" width='50px'/>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor:'pointer' }}>
          <Button color="inherit" component={Link} to="/">Vita Gaurd</Button>
        </Typography>
        <Button color="inherit" component={Link} to="/food-search">Food Search</Button>
        <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
