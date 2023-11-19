import React from 'react'
import style from './ingredient-details.module.css'
import { useParams } from 'react-router-dom'
import { ingredientDataSelector } from '../../services/selectors/ingredientDataSelector';
import { useAppSelector } from '../../services/types';



function IngredientDetails() {

    const ingredients = useAppSelector(ingredientDataSelector)

    const {id} = useParams();


     const selectIngredinet = ingredients?.find((item) => item._id === id)



    return (
        <div className={style.ingredient_details_container}>
            <h2 className="text text_type_main-large">Детали ингредиента</h2>
            <img src={selectIngredinet?.image_large} alt={selectIngredinet?.name} className='mb-4' />
            <p className="text text_type_main-medium mb-8">{selectIngredinet?.name}</p>
            <ul className={style.ingredient_details_ul + ' mb-15'}>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Калории,ккал
                    <p>{selectIngredinet?.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Белки, г
                    <p>{selectIngredinet?.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Жиры, г
                    <p>{selectIngredinet?.calories}</p>
                </li>

                <li className={style.ingredient_details_li + ' text text_type_main-default text_color_inactive'}>Углеводы, г
                    <p>{selectIngredinet?.calories}</p>
                </li>

            </ul>

        </div>
    )
}

export default IngredientDetails