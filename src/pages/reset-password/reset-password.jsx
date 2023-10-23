import React, { useState } from 'react'
import { PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import {  useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styles from './reset-password.module.css'

function ResetPassword() {


  const inputRef = React.useRef(null);

  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  const check = useSelector((store) => store.user.isForgot)


  return (

    <>
    {check || (<Navigate to="/login" replace={true} />)}

      <form className={`${styles.resetform__container} + mt-30`}>

        <PasswordInput
          onChange={e => setPassword(e.target.value)}
          value={password}
          name={'password'}
          extraClass="mb-2"
        />

        <Input
          type={'text'}
          placeholder={'Код из письма'}
          onChange={e => setCode(e.target.value)}
          icon={'EditIcon'}
          value={code}
          name={'code'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />


        <Button htmlType="submit" type="primary" size="medium">
          Нажми на меня
        </Button>

      </form>
    </>

  )
}

export default ResetPassword