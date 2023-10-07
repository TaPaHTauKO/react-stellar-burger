import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useRef } from 'react'
import Ingredient from '../ingredient/ingredient'
import style from './burger-ingredients.module.css'
import PropTypes, { func } from "prop-types";
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { ingredientDataSelector } from '../../services/selectors/ingredientDataSelector';

function BurgerIngredients({ setIsClickIngridient }) {

  const ingredients = useSelector(ingredientDataSelector)

  const [current, setCurrent] = React.useState('one')

  const bunRef = useRef(null);
  const sauseRef = useRef(null);
  const mainRef = useRef(null);

  const [bunTabRef, inViewBun] = useInView({ threshold: 0 });
  const [sauseTabRef, inViewSause] = useInView({ threshold: 0 });
  const [mainTabRef, inViewMain] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inViewBun) {
      setCurrent("one");
    } else if (inViewSause) {
      setCurrent("two");
    } else if (inViewMain) {
      setCurrent("three");
    }
  }, [inViewBun, inViewSause, inViewMain]);

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
        <h2 className="text text_type_main-medium mb-6 mt-10" ref={bunTabRef}>Булки</h2>
        <li className={style.ingredient_li} ref={bunRef}>
          {ingredients.map(item => {
            if (item.type === "bun") {

              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} />)
            }
          })}
        </li>
        <h2 className="text text_type_main-medium mb-6 mt-10" ref={sauseTabRef}>Соусы</h2>
        <li className={style.ingredient_li} ref={sauseRef}>
          {ingredients.map(item => {
            if (item.type === "sauce") {
              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} />)
            }
          })}
        </li>
        <h2 className="text text_type_main-medium mb-6 mt-10" ref={mainTabRef}>Начинки</h2>
        <li className={style.ingredient_li} ref={mainRef}>
          {ingredients.map(item => {
            if (item.type === "main") {
              return (
                <Ingredient key={item._id} ingredient={item} setIsClickIngridient={setIsClickIngridient} />)
            }
          })}
        </li>

      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  setIsClickOrderList: func
}

export default BurgerIngredients