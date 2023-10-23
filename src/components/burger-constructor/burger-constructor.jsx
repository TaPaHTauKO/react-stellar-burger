import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, deleteIngredient, sortIngredients } from '../../services/reducer/constructorIngredientSlise';
import { constructorIngredientSelector } from '../../services/selectors/constructorIngredientSelector';
import { DragableComponent } from '../dragable-component/dragable-component';
import { postOrderQuery } from '../../services/reducer/orderQuery';
import { useModal } from '../../hooks/useModal';
import { Link, useLocation, useNavigate } from "react-router-dom";

function BurgerConstructor() {


  const { openModal } = useModal();

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate();

  const [, dropRef] = useDrop({
    accept: 'ingred',
    drop(data) {
      dispatch(addIngredient(data))
    }
  })

  const ingredients = useSelector(constructorIngredientSelector);
  const user = useSelector((store) => store.user.user)

  const moveIngredients = (dragIndex, hoverIndex) => {

    const sortyIngredients = ingredients[dragIndex]
    const updateIngredientList = [...ingredients]
    updateIngredientList.splice(dragIndex, 1)
    updateIngredientList.splice(hoverIndex, 0, sortyIngredients)
    dispatch(sortIngredients(updateIngredientList))
  }


  const ingredientBun = ingredients?.find(item => item.type === "bun")

  const ingrId = ingredients.map((e) => e._id)

  const onClick = () => { if (user !== null) {

    openModal()
    dispatch(postOrderQuery(ingrId))
  }
  else {
    navigate('/login')
  }
  };



  function handleDeleteIngredient(item) {
    dispatch(deleteIngredient(item))
  }


  const initialValue = 0;
  const sum = (ingredients).reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );



  return (


    <section className={style.burger_constructor_section + ' pt-25 pl-4 pr-4'} ref={dropRef}>

      {
        ingredientBun && (
          <div className='ml-6'>
            {
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${ingredientBun.name} (верх)`}
                price={ingredientBun.price}
                thumbnail={ingredientBun.image}
              />

            }
          </div>
        )
      }

      <ul className={style.constructor_ul} >

        {ingredients && ingredients?.map((el, index) => {
          if (el.type !== 'bun') {

            return (
              <DragableComponent
                moveIngredients={moveIngredients}
                index={index}
                el={el}
                key={el.unicId}>
                <li className={style.constructor_li + ' mb-4'}
                  el={el}>
                  <DragIcon />
                  <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image}
                    handleClose={() => handleDeleteIngredient(el)}
                  />
                </li>
              </DragableComponent>
            )
          }
        })}

      </ul>



      {
        ingredientBun && (
          <div className='ml-6'><ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredientBun.name} (низ)"`}
            price={ingredientBun.price}
            thumbnail={ingredientBun.image}
          />
          </div>
        )
      }

      <div className={style.constructor_price + ' mt-10'}>
        <p className="text text_type_digits-medium mr-10">
          {sum}
          <CurrencyIcon type="primary" />
        </p>
        {sum != 0 &&
          (<Button htmlType="button" type="primary" size="large" onClick={onClick} extraClass={style.order__button}>
            <Link to={`/order`}
                  className={style.order__link}
                  state={{ background: location }}>Оформить заказ</Link>
          </Button>)}

      </div>

    </section>
  )
}

BurgerConstructor.propTypes = {
}

export default BurgerConstructor