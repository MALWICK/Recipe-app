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
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [favorite] = useState('no');
  const [editFood, setEditFood] = useState('');

  useEffect(() => {
    if (values.length !== 0) {
      localStorage.setItem('item', JSON.stringify(values));
    }
  }, [values]);
  /* 
  console.log(values); */

  const ClosePup = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const closeEditform = (e) => {
    e.preventDefault();
    setOpenEdit(false);
  };

  const editValues = (id) => {
    const findRecipe = values.find((item) => item.id === id);
    setEditFood(findRecipe);
    console.log(id);

    setOpenEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = values.filter((value) => value.id !== editFood.id);

    const id = Date.now();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const itemValues = { ...formData, id, favorite, filtered };
    const update = [...filtered, itemValues];
    setValues((prev) => [...prev, itemValues]);
    localStorage.setItem('items', JSON.stringify(update));
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
        editFood,
        closeEditform,
        openEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
