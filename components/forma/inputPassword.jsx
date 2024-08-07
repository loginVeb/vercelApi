'use client'
import React, { useState } from 'react';

const InputPassword = (props) => {

  const [password, setPassword] = useState('');


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
       <input className={props.styles.inputPassword}
        type="password"
        placeholder="введите пароль"
        autoComplete="off"/>
    </>
  )
}

export default InputPassword
