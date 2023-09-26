import React from 'react'
import style from './order-details.module.css'
import image from '../../images/graphics.svg'

function OrderDetails() {
  return (
    <div className={style.order_container}>
        <p className={style.order_details_digits + " text text_type_digits-large mt-30 mb-8"}>123456</p>
        <p className="text text_type_main-medium mb-15">индефикатор</p>
        <img src={image} alt="" className='mb-15'/>
        <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности</p>
    </div>
  )
}

export default OrderDetails