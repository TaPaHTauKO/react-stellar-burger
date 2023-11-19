import React, { useEffect } from 'react'
import { IOrders, useAppDispatch, useAppSelector } from '../../services/types'
import { connect as connectLiveOrder, disconnect as disconnectLiveOrder } from '../../services/reducer/orderFeedActions';
import { Link, useLocation } from 'react-router-dom';
import OrderFeedCard from '../order-feed-card/orderFeedCard';
import styles from './order-history.module.css'


function OrderHistory() {

  const dispatch = useAppDispatch()
  const location = useLocation()

  const accessToken = localStorage.getItem('accessToken')

  const token = accessToken?.substring(7, accessToken.length);

  const LIVE_TABLE_SERVER_URL = 'wss://norma.nomoreparties.space/orders?token=';

  const { orderFeed, status } = useAppSelector(state => state.liveOrderFeed);


  useEffect(() => {
    dispatch(connectLiveOrder(`${LIVE_TABLE_SERVER_URL}${token}`))
    return () => { dispatch(disconnectLiveOrder()); }

  }, [])

  console.log(status);


  return (


    <div className={styles.orderhistory_container}>

      {orderFeed?.orders.map((order: IOrders) => (

        <Link to={`/profile/orders/${order.number}`} key={order._id} className={styles.orderhistoryLink} state={{data:order, background: location}}>

          <OrderFeedCard order={order} />

        </Link>
      )
      )

      }

    </div>


  )
}

export default OrderHistory