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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
