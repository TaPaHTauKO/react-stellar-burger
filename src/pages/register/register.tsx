import React, { useState } from 'react'
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css'
import { userRegistration } from '../../services/reducer/userRegistration';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../services/types';



function Register() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleRegistration(e: React.FormEvent<HTMLFormElement>, name: string, email: string, password: string) {
    e.preventDefault();
    dispatch(userRegistration({email, password, name}))
    navigate("/")
  }


  return (
    <div className={`${styles.container}` + " mt-30"}>
      <h2 className={`${styles.text}` + " text text_type_main-medium mb-6"}>
        Регистрация
      </h2>
      <form onSubmit={(e) => {handleRegistration(e, name, email, password)}}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setName(e.target.value)}
          icon={'EditIcon'}
          value={name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={e => setEmail(e.target.value)}
          value={email}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={e => setPassword(e.target.value)}
          value={password}
          name={'password'}
          extraClass="mb-2"
        />
        <div className={`${styles.registratio_button} + mt-6`}>

        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
        </div>
      </form>

    </div>
  )
}

export default Register