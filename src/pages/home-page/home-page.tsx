import React, { useState } from 'react'
import styles from "./home-page.module.css";
import { Outlet } from "react-router-dom";
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import OrderDetails from '../../components/order-details/order-details';

function HomePage() {


  return (

    <div>

      <Outlet />


      <main className={styles.main + ' ml-5 mr-5'}>

        <BurgerIngredients

        />

        <BurgerConstructor

        />


      </main>

    </div>

  )
}

export default HomePage