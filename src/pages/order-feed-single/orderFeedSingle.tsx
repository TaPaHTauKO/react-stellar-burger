import React, { FC, useState } from 'react'
import styles from './orderFeedSingle.module.css'
import { useLocation } from 'react-router-dom'
import { TIngredient, useAppSelector } from '../../services/types'
import { ingredientDataSelector } from '../../services/selectors/ingredientDataSelector'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'


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

    const location = useLocation()

    const [order, setOrder] = useState<TSoloOrder[]>([location.state])


    function ignoreUndefined(element: any) {
        if (typeof element != "undefined") {
            return element;
        }
    }
    
    const isDataIngredients = useAppSelector(ingredientDataSelector);

    let ingredientsInOrder = order[0].ingredients.map((i: string) =>
        isDataIngredients.find((item) => item._id === i) as TIngredient
    )

    console.log(ingredientsInOrder);

    if (ingredientsInOrder === undefined) return null

    const initValue = 0;
    const sum = ingredientsInOrder?.reduce(

        (accumulator, currentValue) => accumulator + currentValue.price,
        initValue

    );

    return (

        <div className={`${styles.orderFeedSolo__section} mt-30`}>

            <div className={`${styles.orderFeedSolo__container}`}>

                <p className={`${styles.orderFeedSolo__number} mb-10`}># {order[0].number}</p>

                <p className={`${styles.orderFeedSolo__name} mb-3 text text_type_main-medium`}>{order[0].name}</p>

                <p className={`${styles.orderFeedSolo__done} mb-15`}>{order[0].status === 'done' ? "Выполнен" : "В работе"}</p>

                <p className={`${styles.orderFeedSolo__compound} mb-6 text text_type_main-medium`}>Состав:</p>

                <div className={`${styles.orderFeedSolo__ingredients} mb-10 mr-6`}>
                    {ingredientsInOrder.map((ingr) => (
                        <div key={ingr._id} className={`${styles.orderFeedSolo__ingredient}`}>
                            <img src={ingr?.image} alt={ingr?.name} className={`${styles.orderFeedSolo__img}`} />
                            <p className={`${styles.orderFeedSolo__name}`}>{ingr?.name}</p>
                            <p className={`${styles.orderFeedSolo__price}`}>{ingr?.type === 'bun' ? `2 x ${ingr?.price}` : `1 x ${ingr?.price}`} <CurrencyIcon type="primary" /></p>
                        </div>

                    ))}

                </div>

                <div className={`${styles.orderFeedSolo__time_div}`}>
                    <p className={`${styles.orderFeedSolo__time}`}><FormattedDate date={new Date(order[0].createdAt)} /></p>
                    <p className={`${styles.orderFeedSolo__finalPrice}`}>{sum} <CurrencyIcon type="primary" /></p>
                </div>

            </div>

        </div>

    )
}

