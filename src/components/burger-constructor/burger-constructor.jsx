import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import style from './burger-constructor.module.css'

function BurgerConstructor({ ingredients, setIsModalOpen, setIsClickOrderList }) {

  const ingredientBun = ingredients.find(item => item.type === "bun")

  const onClick = () => {
    setIsModalOpen(true)
    setIsClickOrderList(true)
  }


  const initialValue = 0;
  const sum = (ingredients).reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );



  return (


    <section className={style.burger_constructor_section + ' pt-25 pl-4 pr-4'}>

      <div className='ml-6'>
        {
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />

        }
      </div>

      <ul className={style.constructor_ul}>

        {ingredients.map(el => {
          if (el.type !== 'bun') {
            return (
              <li className={style.constructor_li + ' mb-4'}>
                <DragIcon />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </li>
            )
          }
        })}

      </ul>



      <div className='ml-6'><ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={ingredientBun.price}
        thumbnail={ingredientBun.image}
      />
      </div>

      <div className={style.constructor_price + ' mt-10'}>
        <p className="text text_type_digits-medium mr-10">
        {sum}
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large" onClick={onClick}>
          Оформить заказ
        </Button>

      </div>

    </section>
  )
}

export default BurgerConstructor