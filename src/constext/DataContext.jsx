/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect, useContext } from 'react';
import { v4 } from 'uuid';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [values, setValues] = useState({ id: v4() });
  /*   console.log(values); */

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());

    setValues((prev) => ({ ...prev, ...formData }));
    /*  console.log(formData); */

    // Store the values in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  useEffect(() => {
    // Retrieve the data from local storage on component mount
    const formData = localStorage.getItem('formData');
    if (formData) {
      /*   setValues(JSON.parse(formData)); */
      setValues((prev) => ({ ...prev, ...JSON.parse(formData) }));
      /*  console.log(JSON.parse(formData)); */
      // Do something with the retrieved data
    }
  }, []);

  console.log({ values });

  const editValues = () => {
    console.log(values.id);
  };

  return (
    <DataContext.Provider
      value={{ setValues, values, handleSubmit, editValues }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);

export default DataContext;
