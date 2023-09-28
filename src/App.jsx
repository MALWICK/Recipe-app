import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Food from './pages/Food/Food';
import FoodDescription from './pages/RecipeDescription/RecipeDescription';
import { DataProvider } from './constext/DataContext';
import Home from './pages/Home/Home';
import HomeApi from './HomeApi/HomeApi';

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/fooddescription/:id" element={<FoodDescription />} />
            <Route path="/fetchedFood" element={<HomeApi />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
