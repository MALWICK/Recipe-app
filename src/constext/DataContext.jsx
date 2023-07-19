/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    setValues(formData);
    console.log(formData);

    // Store the values in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  useEffect(() => {
    // Retrieve the data from local storage on component mount
    const formData = localStorage.getItem('formData');
    if (formData) {
      setValues(JSON.parse(formData));
      console.log(JSON.parse(formData));
      // Do something with the retrieved data
    }
  }, []);

  return (
    <DataContext.Provider value={{ setValues, values, handleSubmit }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
