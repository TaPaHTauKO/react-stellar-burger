import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { userSelector } from "../../services/selectors/userSelector";
import { TUser } from "../../services/types";

type TProtected = {
  onlyUnAuth: boolean
  component: JSX.Element
}
type TComponent = {
  component:JSX.Element
}

const Protected = ({ onlyUnAuth = false, component }: TProtected) => {
  const user = useSelector(userSelector) as TUser;
  const location = useLocation();

  if (onlyUnAuth && user) {

    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {

    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user

  return component;
};

export const OnlyAuth = (props: TComponent) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props: TComponent) => <Protected onlyUnAuth={true} {...props} />;
