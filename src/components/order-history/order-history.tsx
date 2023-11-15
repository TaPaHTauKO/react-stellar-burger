import React, { useEffect } from 'react'
import { IOrders, useAppDispatch, useAppSelector } from '../../services/types'
import { connect as connectLiveOrder, disconnect as disconnectLiveOrder } from '../../services/reducer/orderFeedActions';
import { Link } from 'react-router-dom';
import OrderFeedCard from '../order-feed-card/orderFeedCard';
import styles from './order-history.module.css'
import { LIVE_TABLE_SERVER_URL } from '../../pages/order-feed/order-feed';


function OrderHistory() {

  const dispatch = useAppDispatch()

  const accessToken = localStorage.getItem('accessToken')

  const token = accessToken?.substring(7, accessToken.length);

  const LIVE_TABLE_SERVER_URL = 'wss://norma.nomoreparties.space/orders?token=';

  const { orderFeed, status } = useAppSelector(state => state.liveOrderFeed);


  useEffect(() => {
    dispatch(connectLiveOrder(`${LIVE_TABLE_SERVER_URL}${token}`))

    // для проверки
    // dispatch(connectLiveOrder(LIVE_TABLE_SERVER_URL))
    
    return () => { dispatch(disconnectLiveOrder()); }

  }, [])

  console.log(status);


  return (


    <div className={styles.orderhistory_container}>

      {orderFeed?.orders.map((order: IOrders) => (

        <Link to={`/order-feed/${order._id}`} key={order._id} className={styles.orderhistoryLink} state={order}>

          <OrderFeedCard order={order} />

        </Link>
      )
      )

      }

    </div>


  )
}

export default OrderHistory