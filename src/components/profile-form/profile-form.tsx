import React, { useState } from 'react'
import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './profile-form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserInfo } from '../../services/reducer/changeUserInfo';
import { userSelector } from '../../services/selectors/userSelector';
import { TUser } from '../../services/types';




function ProfileForm() {

    const dispatch = useDispatch();

    const user = useSelector(userSelector) as TUser

    const [valueName, setValueName] = useState(`${user.name}`)
    const [valueEmail, setValueEmail] = useState(`${user.email}`)
    const [valuePassword, setValuePassword] = useState('')
    const inputRef = React.useRef(null);



    function handleSubmit(e: React.FormEvent, valueName: string, valueEmail: string) {
        e.preventDefault();
        dispatch(changeUserInfo({ valueName, valueEmail }))
    }

    function handleCancel() {
        setValueName(user.name);
        setValueEmail(user.email)
    }

    return (
        <form onSubmit={(e) => { handleSubmit(e, valueName, valueEmail) }}>

            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setValueName(e.target.value)}
                icon={'EditIcon'}
                value={valueName}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mb-6"
            />
            <EmailInput
                onChange={e => setValueEmail(e.target.value)}
                value={valueEmail}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={e => setValuePassword(e.target.value)}
                value={valuePassword}
                name={'password'}
                extraClass="mb-2"
            />
            <div className={styles.forms_buttons}>
                <p className={`${styles.cansel_button} + text_color_inactive mr-4`} onClick={() => handleCancel()}>Отмена</p>
                <Button htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </form>
    )
}

export default ProfileForm