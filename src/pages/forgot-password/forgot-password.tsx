import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useState } from 'react'
import styles from './forgot-password.module.css'
import { sendEmail } from '../../services/reducer/sendEmailForReset'
import { setForgotPass } from '../../services/reducer/userSlise';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/types';

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    dispatch(sendEmail(email))
    dispatch(setForgotPass())
    navigate('/reset-password')
  }

  return (

    <div className={`${styles.forgot__container} + mt-30`}>
      <h2>
        Восстановление пароля
      </h2>
      <form onSubmit={(e) => { handleSubmit(e, email) }} className={styles.forgot__form}>

        <EmailInput
          onChange={e => setEmail(e.target.value)}
          value={email}
          name={'email'}
          placeholder="Логин"
          isIcon={false}
          extraClass="mb-2"
          required
        />

        <Button htmlType="submit" type="primary" size="medium">
          Нажми на меня
        </Button>

      </form>

      <div></div>

    </div>

  )
}

export default ForgotPassword