"use client";
 import {useContext} from 'react';
import ContextForm from './contextForm';


const InputText = (props) => {

  const context = useContext(ContextForm);

  return (
    <>
      <input className={props.styles.inputText}
        type="text"
        onChange={context.handleChangeInput}
        name="name"
        autoComplete="off"/>
    </>
  )
}

export default InputText
