import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css'
import { useDrop } from 'react-dnd'
import { addIngredient, deleteIngredient, sortIngredients } from '../../services/reducer/constructorIngredientSlise';
import { constructorIngredientSelector } from '../../services/selectors/constructorIngredientSelector';
import { DragableComponent } from '../dragable-component/dragable-component';
import { postOrderQuery } from '../../services/reducer/orderQuery';
import { useModal } from '../../hooks/useModal';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userSelector } from '../../services/selectors/userSelector';
import { useAppDispatch, useAppSelector } from '../../services/types';
import { getAccesToken } from '../../services/reducer/getAccessToken';


export type TConstruktorIngredients = [{
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
  __v: number,
  _id: string,
  unicId: string,
}]



function BurgerConstructor() {


  const { openModal } = useModal();

  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate();

  const [, dropRef] = useDrop({
    accept: 'ingred',
    drop(data) {
      dispatch(addIngredient(data))
    }
  })

  const ingredients = useAppSelector(constructorIngredientSelector);
  const user = useAppSelector(userSelector)


  const moveIngredients = (dragIndex: number, hoverIndex: number) => {

    const sortyIngredients = ingredients[dragIndex]
    const updateIngredientList = [...ingredients]
    updateIngredientList.splice(dragIndex, 1)
    updateIngredientList.splice(hoverIndex, 0, sortyIngredients)
    dispatch(sortIngredients(updateIngredientList))
  }

  const token = localStorage.getItem('accessToken')

  const ingredientBun = ingredients?.find(item => item.type === "bun")

  const ingrId = ingredients?.map((e) => e._id)

  const onClick = () => {
    if (user == null) {
      navigate('/login')
    }
    else {
      openModal()
      dispatch(getAccesToken())
      dispatch(postOrderQuery(ingrId))
    }
  };



  function handleDeleteIngredient(item: string | undefined) {
    dispatch(deleteIngredient(item))
  }


  const initValue = 0;
  const sum = ingredients?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initValue
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

                key={el.unicId}>
                <li className={style.constructor_li + ' mb-4'}>
                  <DragIcon type={'primary'} />
                  <ConstructorElement
                    text={el.name}
                    price={el.price}
                    thumbnail={el.image}
                    handleClose={() => handleDeleteIngredient(el.unicId)}
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
        {sum != 0 && user !== null &&
          (
            <Link to={`/order`} onClick={onClick}
              className={style.order__link}
              state={{ background: location }}>Оформить заказ</Link>
          )}

        {sum != 0 && user == null &&
          (
            <Button htmlType='button' onClick={()=>onClick()}
               extraClass={style.order__link}
              >Оформить заказ</Button>
          )}

      </div>

    </section>
  )
}


export default BurgerConstructor