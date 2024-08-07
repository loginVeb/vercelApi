"use client";

import ContextForm from './contextForm';
import { useState } from 'react';

const Forma = (props) => {
  const { children, styles } = props;


  const [inputValues, setInputValues] = useState('');
 
  const handleChangeInput = (event) => {
    setInputValues(event.target.value);
  };

  console.log(inputValues)


  return (
    <ContextForm.Provider  value={{handleChangeInput}}>
    <form className={styles.forma}>
      {children}
    </form>
    </ContextForm.Provider>
  );
};

export default Forma;
