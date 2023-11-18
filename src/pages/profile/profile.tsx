import React from 'react'
import styles from "./profile.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logOut } from '../../services/reducer/logOut';
import { useAppDispatch } from '../../services/types';


function Profile() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleExit = () => {
    dispatch(logOut());
    navigate("/")
  }

  return (
    <div className={`${styles.profile} + mt-30`}>
      <div className={`${styles.profile_menu} + mr-15`}>
        <div className={"mb-20"}>
          <div>
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.link_active} + text text_type_main-medium`
                  : `${styles.link_inactive} + text text_type_main-medium text_color_inactive`
              }
            >
              Профиль
            </NavLink>
          </div>
          <div className="mt-6">
            <NavLink
              to="/profile/orders"
              caseSensitive
              className={({ isActive }) =>
                isActive
                  ? `${styles.link_active} + text text_type_main-medium`
                  : `${styles.link_inactive} + text text_type_main-medium text_color_inactive`
              }
              end
            >
              История заказов
            </NavLink>
          </div>
          <div className="mt-6">
            <p
              className={`${styles.exit_button} + text text_type_main-medium`}
              onClick={() => handleExit()}
            >
              Выход
            </p>
          </div>
        </div>
        <p className="text text_type_main-small text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  )
}

export default Profile