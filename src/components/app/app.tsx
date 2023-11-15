import styles from "./app.module.css";
import Appheader from "../app-header/app-header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../pages/home-page/home-page";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Login from "../../pages/login/login";
import OrderFeed from "../../pages/order-feed/order-feed";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfileForm from "../profile-form/profile-form";
import OrderHistory from "../order-history/order-history";
import { useDispatch, useSelector } from "react-redux";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route"
import { useEffect } from "react";
import { fetchIngredientData } from "../../services/reducer/ingredientDataQuery";
import { ingredientDataSelector } from "../../services/selectors/ingredientDataSelector"
import { getUser } from "../../services/reducer/getUser";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { getAccesToken } from "../../services/reducer/getAccessToken";
import { OrderFeedSingle } from "../../pages/order-feed-single/orderFeedSingle";

export type TDataIngredient = [{
  calories: number
  carbohydrates: number
  fat: number
  image: string
  image_large: string
  image_mobile: string
  name: string
  price: number
  proteins: number
  type: string
  __v: number
  _id: string
}]


function App() {

  const dispatch = useDispatch();
  const refreshToken: string | null = localStorage.getItem("refreshToken");
  const location = useLocation()
  const background = location.state && location.state.background


  const navigate = useNavigate();
  const handleCloseModal = () => navigate(-1)

  function checkUserAuth(refreshToken: string | null) {
    if (refreshToken !== null) {
      dispatch(getAccesToken())
      dispatch(getUser())
    }
  }

  useEffect(
    () => {
      checkUserAuth(refreshToken)
    }, []
  )

  useEffect(() => dispatch(fetchIngredientData()) as any, [])
  const isDataIngredients = useSelector(ingredientDataSelector);

  if (isDataIngredients?.length < 1) return null



  return (
    <div className={styles.app}>

      <Appheader />

      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />} />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route path="/order-feed" element={<OrderFeed />} />
        <Route path="/order-feed/:id" element={<OrderFeedSingle />} />
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/profile/orders" element={<OrderHistory />} />
        </Route>
        <Route path="/profile/orders/:id" element={<OrderFeedSingle />} />
        <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {background && (
        <Routes location={location}>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                closeModalCb={handleCloseModal}
                children={<IngredientDetails />}
              ></Modal>
            }
          />

          <Route
            path="/order"
            element={
              <Modal
                closeModalCb={handleCloseModal}
                children={<OrderDetails />}
              ></Modal>
            }
          />
        </Routes>)}

    </div>
  );
}



export default App;
