import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './ingredient.module.css'
import PropTypes, { func, object } from "prop-types";
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { constructorIngredientSelector } from '../../services/selectors/constructorIngredientSelector'
import { selectIngredient } from '../../services/reducer/selectIngredientSlice'
import { useModal } from '../../hooks/useModal'



function Ingredient({ ingredient }) {

  const dispatch = useDispatch()


  const onClick = () => {
    dispatch(selectIngredient(ingredient))
  }

  const [, dragRef] = useDrag({
    type: 'ingred',
    item: ingredient
  })



  const constructorIngredientList = useSelector(constructorIngredientSelector)

  function counteIngredients(el) {
    return (constructorIngredientList.filter((item) => (item._id == el._id)).length
    )}
    
  const count = counteIngredients(ingredient)

  return (
    <div className={style.ingredient_card + ' mt-6'} ref={dragRef} >
      <Counter count={count} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name} onClick={onClick}/>
      <span className='text text_type_digits-default mt-1 mb-1'>{ingredient.price} <CurrencyIcon type="primary" /></span>
      <p className={style.ingredient_text + ' text text_type_main-default'}>{ingredient.name}</p>

    </div>
  )
}


Ingredient.propTypes = {
  ingredient: object,

}

export default Ingredient