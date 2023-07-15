import styles from "./app.module.css";
import { data } from "../../utils/data";
import Appheader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";
const baseUrl = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickIngridient, setIsClickIngridient] = useState(false);
  const [isClickOrderList, setIsClickOrderList] = useState(false);
  const [isItemImage, setIsItemImage] = useState(null);
  const [isDataIngredients, setIsDataIngredients] = useState([]);

  const getData = () => {
    return (
      fetch(baseUrl)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
          setIsDataIngredients(res.data)
        })
    )
  }

  useEffect(() => getData(), [])

  if (isDataIngredients.length < 1) return null

  const createModal = () => {
    return (
      <Modal
        setIsModalOpen={setIsModalOpen}
        setIsClickIngridient={setIsClickIngridient}
        setIsClickOrderList={setIsClickOrderList}
      >
        {isClickIngridient && <IngredientDetails isItemImage={isItemImage} /> || isClickOrderList && <OrderDetails />}
      </Modal>
    )
  }


  return (
    <div className={styles.app}>

      <Appheader />

      <main className={styles.main + ' ml-5 mr-5'}>

        <BurgerIngredients
          ingredients={isDataIngredients}
          setIsClickIngridient={setIsClickIngridient}
          setIsModalOpen={setIsModalOpen}
          setIsItemImage={setIsItemImage}
        />

        <BurgerConstructor
          ingredients={isDataIngredients}
          setIsModalOpen={setIsModalOpen}
          setIsClickOrderList={setIsClickOrderList}
        />

        {isModalOpen && (
          <>
            {createModal()}</>)}

      </main>
    </div>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};


export default App;
