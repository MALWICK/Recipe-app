import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Food from './pages/Food/Food';
import FoodDescription from './pages/RecipeDescription/RecipeDescription';
import { DataProvider } from './constext/DataContext';
import Home from './pages/Home/Home';
import HomeApi from './HomeApi/HomeApi';
import MealDescription from './pages/MealDescription/MealDescription';
import CategoryDescription from './pages/catergoryDescription/categoryDescription';
import FoodCategoryDescription from './pages/foodCategoryDescription/foodCategoryDescription';
import ForyouFoodDescription from './pages/foryou/foryouFoodDescription';

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
            <Route
              path="/meal-description/:mealId"
              element={<MealDescription />}
            />
            <Route
              path="/categoryDescription/:category"
              element={<CategoryDescription />}
            />
            <Route
              path="/foodCategoryDescription/:mealId"
              element={<FoodCategoryDescription />}
            />
            <Route
              path="/foryouFoodDescription/:idMeal"
              element={<ForyouFoodDescription />}
            />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
