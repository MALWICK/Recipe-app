/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext({});
const itemsForm = () => {
  const dats = localStorage.getItem('item');
  if (dats) {
    return JSON.parse(dats);
  }
  return [];
};

export function DataProvider({ children }) {
  const [values, setValues] = useState(itemsForm());
  /*   console.log(values); */
  const [open, setOpen] = useState(false);
  const [favorite] = useState('no');

  useEffect(() => {
    if (values.length !== 0) {
      localStorage.setItem('item', JSON.stringify(values));
    }
  }, [values]);

  console.log(values);

  const ClosePup = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const editValues = () => {
    console.log(values.id);
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const itemValues = { ...formData, id, favorite };
    setValues((prev) => [...prev, itemValues]);
    setOpen(false);
  };

  return (
    <DataContext.Provider
      value={{
        setValues,
        values,
        editValues,
        open,
        setOpen,
        ClosePup,
        favorite,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
