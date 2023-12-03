import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './category.css';

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        );
        setCategories(response.data?.meals);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loader while fetching data
  }

  const handleCategoryClick = (strCategory) => {
    navigate(`/categoryDescription/${strCategory}`);
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          className="category-holder"
          key={category.strCategory}
          onClick={() => handleCategoryClick(category.strCategory)}
          aria-hidden="true"
        >
          {category.strCategory}
        </div>
      ))}
    </div>
  );
}

export default Category;
