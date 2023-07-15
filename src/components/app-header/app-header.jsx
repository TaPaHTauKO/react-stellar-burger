import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import React from 'react'
import style from './app-header.module.css'

function Appheader() {
    return (
        <header className={style.header + ' mt-4'}>

            <div className={style.header_menu}>

                <a href="#" className={style.header_link + ' p-5'}>
                    <BurgerIcon type="primary" />
                    <p className='ml-2 text text_type_main-default'>Конструктор</p>
                </a>

                <a href="" className={style.header_link + ' p-5 ml-2'}>
                    <ListIcon type="secondary" />
                    <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
                </a>
            </div>


            <Logo />

            <a href="" className={style.header_link + ' p-5'}>
                <ProfileIcon type="secondary" />
                <p className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
            </a>
            


        </header>
    )
}

export default Appheader