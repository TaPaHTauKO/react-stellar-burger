import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import Ingredient from '../ingredient/ingredient'
import style from './burger-ingredients.module.css'

function BurgerIngredients({ingredients, setIsClickIngridient, setIsModalOpen, setIsItemImage}) {

  const [current, setCurrent] = React.useState('one')


  return (
    <section className={style.ingredient_section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <ul className={style.ingredient_ul}>
      <h2 className="text text_type_main-medium mb-6 mt-10">Булки</h2>
        <li className={style.ingredient_li}>
          {ingredients.map(item => {
            if (item.type === "bun") {
              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} setIsModalOpen={setIsModalOpen} setIsItemImage={setIsItemImage}/>)
            }
          })}
        </li>
        <h2 className="text text_type_main-medium mb-6 mt-10">Соусы</h2>
        <li className={style.ingredient_li}>
          {ingredients.map(item => {
            if (item.type === "sauce") {
              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} setIsModalOpen={setIsModalOpen} setIsItemImage={setIsItemImage}/>)
            }
          })}
        </li>
        <h2 className="text text_type_main-medium mb-6 mt-10">Начинки</h2>
        <li className={style.ingredient_li}>
          {ingredients.map(item => {
            if (item.type === "main") {
              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} setIsModalOpen={setIsModalOpen} setIsItemImage={setIsItemImage}/>)
            }
          })}
        </li>

      </ul>
    </section>
  )
}

export default BurgerIngredients