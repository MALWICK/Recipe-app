/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [values, setValues] = useState([]);
  /*   console.log(values); */
  const [open, setOpen] = useState(false);
  const [favorite] = useState('no');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const itemValues = { ...formData, id, favorite };
    setValues((prev) => [...prev, itemValues]);
    if (values.length > 0) {
      // Store the values in local storage
      localStorage.setItem('formData', JSON.stringify(values));
    }
    setOpen(false);
  };

  console.log(values);

  useEffect(() => {
    // Retrieve the data from local storage on component mount
    const retrieveDataFromLocalStorage = () => {
      const formData = localStorage.getItem('formData');
      if (formData) {
        return JSON.parse(formData);
      }
      return null;
    };
    retrieveDataFromLocalStorage();
  }, []);

  const ClosePup = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const editValues = () => {
    console.log(values.id);
    setOpen(true);
  };

  return (
    <DataContext.Provider
      value={{
        setValues,
        values,
        handleSubmit,
        editValues,
        open,
        setOpen,
        ClosePup,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
