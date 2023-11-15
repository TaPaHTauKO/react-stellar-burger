import React, { useEffect } from 'react'
import styles from './order-feed.module.css'
import { IOrders, useAppDispatch, useAppSelector } from '../../services/types'

import { connect as connectLiveOrder, disconnect as disconnectLiveOrder } from '../../services/reducer/orderFeedActions';

import { WebsocketStatus } from '../../services/types';
import { orderFeedSelector } from '../../services/selectors/orderFeedSelector';
import { Link } from 'react-router-dom';
import OrderFeedCard from '../../components/order-feed-card/orderFeedCard';
import uuid from 'react-uuid';

export const LIVE_TABLE_SERVER_URL = 'wss://norma.nomoreparties.space/orders/all';

function OrderFeed() {


  const dispatch = useAppDispatch()

  const { orderFeed, status } = useAppSelector(state => state.liveOrderFeed);
  const isDisconnected = status !== WebsocketStatus.OFFLINE;

  const numbersRedyOrder = orderFeed?.orders.filter((el) => el.status === "done")

  const numbersInWorkOrder = orderFeed?.orders.filter((el) => el.status === "pending")


  useEffect(() => {
    dispatch(connectLiveOrder(LIVE_TABLE_SERVER_URL))
    return () => { dispatch(disconnectLiveOrder()); }

  }, [])



  return (

    <>
      <h2 className={`${styles.orderFeed_text}text text_type_main-large mt-20 mb-5`}> Лента заказов</h2>

      <div className={styles.orderFeed_page}>

        <div className={styles.orderList_container}>

          {orderFeed?.orders.map((order: IOrders) => (

            <Link to={`/order-feed/${order._id}`} key={order._id} className={styles.ordeFeedLink}>

              <OrderFeedCard order={order} />

            </Link>
          )
          )

          }

        </div>

        <div className={styles.orderFeed__statusContainer}>

          <div className={styles.orderFeed__status}>

            <div >

              <p className="text text_type_main-default">Готовы:</p>

              <div className={styles.orders__ready}>{numbersRedyOrder?.map((el) => (
                <div className={styles.feed__numbers} key={uuid()}>{el.number}</div>
              ))}</div>


            </div>

            <div>

              <p className="text text_type_main-default">В работе:</p>

              <div className={styles.orders__ready}>
                {numbersInWorkOrder?.map((el) => (
                  <div className={styles.feed__numbers} key={uuid()}>{el.number}</div>
                ))}
              </div>


            </div>

          </div>

          <div>
            <p className="text text_type_main-default">Выполнено за все время:</p>
            <p className="text text_type_digits-large">{orderFeed?.total}</p>
          </div>

          <div>
            <p className="text text_type_main-default">выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{orderFeed?.totalToday}</p>
          </div>

        </div>

      </div>
    </>

  )
}

export default OrderFeed