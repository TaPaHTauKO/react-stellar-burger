import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './ingredient.module.css'
import { useDrag } from 'react-dnd'
import { constructorIngredientSelector } from '../../services/selectors/constructorIngredientSelector'
import { selectIngredient } from '../../services/reducer/selectIngredientSlice'
import { useAppDispatch, useAppSelector } from '../../services/types';
import { TIngredient } from '../../services/types';

type IIngredient = {
  ingredient: TIngredient

}


function Ingredient({ ingredient } : IIngredient ) {

  const dispatch = useAppDispatch()


  const onClick = () => {
    dispatch(selectIngredient(ingredient))
  }

  const [, dragRef] = useDrag({
    type: 'ingred',
    item: ingredient
  })



  const constructorIngredientList = useAppSelector(constructorIngredientSelector)

  function counteIngredients(id: string) {
    return (constructorIngredientList.filter((item) => (item._id === id)).length
    )}
    
  const count = counteIngredients(ingredient._id)

  return (
    <div className={style.ingredient_card + ' mt-6'} ref={dragRef} >
      <Counter count={count} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name} onClick={onClick}/>
      <span className='text text_type_digits-default mt-1 mb-1'>{ingredient.price} <CurrencyIcon type="primary" /></span>
      <p className={style.ingredient_text + ' text text_type_main-default'}>{ingredient.name}</p>

    </div>
  )
}



export default Ingredient