import { FC, useEffect } from 'react'
import styles from './orderFeedSingle.module.css'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/types'
import { ingredientDataSelector } from '../../services/selectors/ingredientDataSelector'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { selectOrderQuery } from '../../services/reducer/selectOrderQuery'
import { orderIngredientsOrders } from '../../services/selectors/orderSelector'


export type TSoloOrder = {
    createdAt: Date,
    ingredients: string[],
    name: string,
    number: number,
    status: string,
    updateAt: Date,
    _id: string
}

export const OrderFeedSingle: FC = () => {

    const dispatch = useAppDispatch()

    const { id } = useParams()


    useEffect(() => {
        dispatch(selectOrderQuery(id));

    }, [])


    const isDataIngredients = useAppSelector(ingredientDataSelector);
    
    const orderIngredients = useAppSelector(orderIngredientsOrders)

    let ingredientsInOrder2 = orderIngredients?.map((i) =>
    isDataIngredients?.filter((item) => i.ingredients.includes(item._id)))

    if (!(ingredientsInOrder2 && ingredientsInOrder2?.length >= 0)) return null

    const initValue = 0;
    const sum = ingredientsInOrder2[0]?.reduce(

        (accumulator, currentValue) => accumulator + currentValue.price,
        initValue

    );

    if (orderIngredients === null) return null
    return (

        <div className={`${styles.orderFeedSolo__section}`}>

            <div className={`${styles.orderFeedSolo__container}`}>

                <p className={`${styles.orderFeedSolo__number} text text_type_digits-default mt-10`}># {orderIngredients[0].number}</p>

                <p className={`${styles.orderFeedSolo__name} text text_type_main-large mt-10`}>{orderIngredients[0].name}</p>

                <p className={`${styles.orderFeedSolo__done} text text_type_main-medium mt-10`}>{orderIngredients[0].status === 'done' ? "Выполнен" : "В работе"}</p>

                <p className={`${styles.orderFeedSolo__compound} text text_type_main-medium mt-15`}>Состав:</p>

                <div className={`${styles.orderFeedSolo__ingredients} mb-10 mr-6`}>
                    {ingredientsInOrder2[0]?.map((ingr) => (
                        <div key={ingr._id} className={`${styles.orderFeedSolo__ingredient}`}>
                            <img src={ingr?.image} alt={ingr?.name} className={`${styles.orderFeedSolo__img}`} />
                            <p className={`${styles.orderFeedSoloIngredient__name}`}>{ingr?.name}</p>
                            <p className={`${styles.orderFeedSolo__price}`}>{ingr?.type === 'bun' ? `2 x ${ingr?.price}` : `1 x ${ingr?.price}`} <CurrencyIcon type="primary" /></p>
                        </div>

                    ))}

                </div>

                <div className={`${styles.orderFeedSolo__time_div} mb-10`}>
                    <p className={`${styles.orderFeedSolo__time}`}><FormattedDate date={new Date(orderIngredients[0].createdAt)} /></p>
                    <p className={`${styles.orderFeedSolo__finalPrice}`}>{sum} <CurrencyIcon type="primary" /></p>
                </div>

            </div>

        </div>

    )
}

