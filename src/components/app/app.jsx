import styles from "./app.module.css";
import Appheader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredientData } from "../../services/reducer/ingredientDataQuery";
import { ingredientDataSelector } from "../../services/selectors/ingredientDataSelector";
import { selectIngredientSelector } from "../../services/selectors/selectIngredientSelector";



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickIngridient, setIsClickIngridient] = useState(false);
  const [isClickOrderList, setIsClickOrderList] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => dispatch(fetchIngredientData()), [])

  const isDataIngredients = useSelector(ingredientDataSelector);

  const selectIngredinet = useSelector(selectIngredientSelector);

  if (isDataIngredients.length < 1) return null

  const createModal = () => {
    return (
      <Modal
        setIsModalOpen={setIsModalOpen}
        setIsClickIngridient={setIsClickIngridient}
        setIsClickOrderList={setIsClickOrderList}
      >
        {isClickIngridient && <IngredientDetails selectIngredinet={selectIngredinet} /> || isClickOrderList && <OrderDetails />}
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
        />

        <BurgerConstructor
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



export default App;
