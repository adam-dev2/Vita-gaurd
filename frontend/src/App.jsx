import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FoodSearch from './pages/FoodSearch';
import Inventory from './pages/Inventory';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-search" element={<FoodSearch />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
