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
  const [favourite, setFavourite] = useState('false');
  const [editFood, setEditFood] = useState('');
  const [disVal, setDisVal] = useState('');
  const [search, setSearch] = useState('');

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

  const editValues = (val) => {
    setEditFood(val);
    setOpenEdit(true);
  };

  const getReadMoreVal = (val) => {
    /*   console.log(val);
    console.log(val.id); */
    setDisVal(val);
    /*  console.log('idiot'); */
  };

  const lovedFavourite = () => {
    setFavourite(!favourite);
  };

  const deleteRecipe = (id) => {
    console.log(id);
    console.log('idiot');
    const filtered = values.filter((value) => value.id !== id);
    localStorage.setItem('item', JSON.stringify(filtered));
    console.log(filtered);
    window.location.href = '/food';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = values.filter((value) => value.id === editFood.id);

    const id = Date.now();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const itemValues = { ...formData, id, favourite, filtered };
    const update = [...filtered, itemValues];
    setValues((prev) => [...prev, itemValues]);
    localStorage.setItem('item', JSON.stringify(update));
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
        favourite,
        handleSubmit,
        editFood,
        closeEditform,
        openEdit,
        setOpenEdit,
        getReadMoreVal,
        disVal,
        setFavourite,
        lovedFavourite,
        deleteRecipe,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
