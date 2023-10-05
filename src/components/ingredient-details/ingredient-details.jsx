import React from 'react'
import style from './ingredient-details.module.css'
import { useSelector } from 'react-redux';
import { selectIngredientSelector } from '../../services/selectors/selectIngredientSelector';

function IngredientDetails() {


   const selectIngredinet =  useSelector(selectIngredientSelector)

    return (
        <div className={style.ingredient_details_container}>
            <h2 className="text text_type_main-large">Детали ингредиента</h2>
            <img src={selectIngredinet.image_large} alt={selectIngredinet.name} className='mb-4' />
            <p className="text text_type_main-medium mb-8">{selectIngredinet.name}</p>
            <ul className={style.ingredient_details_ul + ' mb-15'}>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Калории,ккал
                    <p>{selectIngredinet.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Белки, г
                    <p>{selectIngredinet.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Жиры, г
                    <p>{selectIngredinet.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Углеводы, г
                    <p>{selectIngredinet.calories}</p>
                </li>

            </ul>

        </div>
    )
}

export default IngredientDetails