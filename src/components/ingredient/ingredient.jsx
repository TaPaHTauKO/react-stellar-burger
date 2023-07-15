import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import style from './ingredient.module.css'

function Ingredient({ingredient, setIsClickIngridient, setIsModalOpen, setIsItemImage}) {

  const onClick = () => {
    setIsModalOpen(true)
    setIsClickIngridient(true)
    setIsItemImage(ingredient)
  }

  return (
    <div className={style.ingredient_card + ' mt-6'}>
      <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name} onClick={onClick}/>
        <span className='text text_type_digits-default mt-1 mb-1'>{ingredient.price} <CurrencyIcon type="primary" /></span>
        <p className={style.ingredient_text + ' text text_type_main-default'}>{ingredient.name}</p>

    </div>
  )
}

export default Ingredient