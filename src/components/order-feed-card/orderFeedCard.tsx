import React from 'react'
import styles from './orderFeedCard.module.css'
import { IOrders, TIngredient, useAppSelector } from '../../services/types'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientDataSelector } from '../../services/selectors/ingredientDataSelector'

interface IOrderCard {
    order: IOrders
}

function OrderFeedCard(order: IOrderCard) {
    const isDataIngredients = useAppSelector(ingredientDataSelector);

    function ignoreUndefined(element: any) {
        if (typeof element != "undefined") {
            return element;
        }
    }

    let ingredientsInOrder = order.order.ingredients.map((i) =>
        isDataIngredients?.find((item) => item._id === i) as TIngredient
    )

    ingredientsInOrder = ingredientsInOrder.filter((el) => el !== undefined)


    const initValue = 0;
    const sum = ingredientsInOrder.reduce(

        (accumulator, currentValue) => accumulator + currentValue.price,
        initValue

    );



    return (

        <div className={styles.orderFeedCard__container}>

            <div className={styles.orderFeed_numberContainer}>

                <p className={styles.orderFeedNumber}>

                    #{order.order.number}

                </p>

                <p className={styles.orderFeedTime}>

                    <FormattedDate date={new Date(order.order.createdAt)} />

                </p>

            </div>

            <p className={styles.orderFeedText}>

                {order.order.name}

            </p>

            <div className={styles.orderFeed_numberContainer}>

                <div className={styles.orderIngredientImgs}>
                    {ingredientsInOrder.slice(0, 4).map((item, index) => (
                        <div className={styles.orderIngredientImgContainer} key={index}>
                            <img className={styles.orderIngredient__img} src={item?.image} alt={item?.image} />
                        </div>

                    ))} 
                    {ingredientsInOrder.slice(5, 6).map((item, index) => (
                        <div className={styles.orderIngredientImgContainerLast} key={index}>
                            <img className={styles.orderIngredient__img} src={item?.image} alt={item?.image} />
                            <p className={styles.orderIngredient__img_plus}>+{ingredientsInOrder.length - 5}</p>
                        </div>

                    ))}

                </div>

                <div className={styles.orderFeed_summContainer}>
                    <div className='mr-2'>
                        {sum}
                    </div>

                    <CurrencyIcon type="primary" />

                </div>


            </div>

        </div>
    )
}

export default OrderFeedCard