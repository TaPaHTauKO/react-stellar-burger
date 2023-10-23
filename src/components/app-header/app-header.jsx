import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import React from 'react'
import style from './app-header.module.css'
import { NavLink } from "react-router-dom";

function Appheader() {
    return (
        <header className={style.header + ' mt-4'}>

            <div className={style.header_menu}>

                <NavLink to="/" className={style.header_link + ' p-5'}>
                    {({ isActive }) => (
                        <>

                            <BurgerIcon type={isActive ? "primary" : "secondary"} />
                            <p className={
                                isActive
                                    ? "text text_type_main-default"
                                    : "text text_type_main-default text_color_inactive"
                            }>Конструктор</p>

                        </>
                    )}

                </NavLink>

                <NavLink to="/order-feed" className={style.header_link + ' p-5 ml-2'}>
                    {({ isActive }) => (
                        <>
                            <ListIcon type={isActive ? "primary" : "secondary"} />
                            <p className={
                                isActive
                                    ? "text text_type_main-default"
                                    : "text text_type_main-default text_color_inactive"
                            }>Лента заказов</p>
                        </>
                    )}

                </NavLink>
            </div>


            <Logo />

            <NavLink to="/profile" className={style.header_link + ' p-5'}>
                {({ isActive }) => (

                    <>
                        <ProfileIcon type={isActive ? "primary" : "secondary"} />
                        <p className={
                            isActive
                                ? "text text_type_main-default"
                                : "text text_type_main-default text_color_inactive"
                        }>Личный кабинет</p>
                    </>

                )}

            </NavLink>



        </header>
    )
}

export default Appheader