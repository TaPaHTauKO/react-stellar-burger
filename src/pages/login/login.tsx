import React, { useState } from 'react'
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logIn } from '../../services/reducer/logIn';


function Login() {

  const dispatch = useDispatch();
 

  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, valueEmail: string, valuePassword: string) => {
    e.preventDefault();
    dispatch(logIn({ valueEmail, valuePassword }))
  }

  return (
    <div className='mt-30'>
      <form className={styles.login_form} onSubmit={(e) => { handleSubmit(e, valueEmail, valuePassword) }}>
        <h2 className='text text_type_main-medium'>Вход</h2>
        <EmailInput
          onChange={e => setValueEmail(e.target.value)}
          value={valueEmail}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6 mt-6"
        />
        <PasswordInput
          onChange={e => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'password'}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass='mb-20'>

          Войти

        </Button>




        <p className='text text_type_main-small text_color_inactive'>
          Вы - новый пользователь?
          <Link className={`${styles.link} + ml-2`} to="/register">Зарегистрироваться</Link>
        </p>

        <p className='text text_type_main-small text_color_inactive'>
          Забыли пароль?
          <Link className={`${styles.link} + ml-2`} to="/forgot-password">
            Восстановить пароль
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login