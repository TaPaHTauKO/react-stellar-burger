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




function App() {

  const [isClickIngridient, setIsClickIngridient] = useState(false);
  const [isClickOrderList, setIsClickOrderList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchIngredientData()), [])

  const isDataIngredients = useSelector(ingredientDataSelector);

  const createModal = () => {
    
    return (
      <Modal
        setIsClickIngridient={setIsClickIngridient}
        setIsClickOrderList={setIsClickOrderList}
      >
        {isClickIngridient && <IngredientDetails /> || isClickOrderList && <OrderDetails />}
      </Modal>
    )
  }

  if (isDataIngredients.length < 1) return null

  return (
    <div className={styles.app}>

      <Appheader />

      <main className={styles.main + ' ml-5 mr-5'}>

        <BurgerIngredients
          setIsClickIngridient={setIsClickIngridient}
        />

        <BurgerConstructor
          setIsClickOrderList={setIsClickOrderList}
        />

        {(isClickIngridient || isClickOrderList) && (
          <>
            {createModal()}

          </>)}

      </main>
    </div>
  );
}



export default App;
