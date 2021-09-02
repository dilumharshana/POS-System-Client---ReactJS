import { Route, Redirect } from "react-router-dom";

export const ProtectedLogin = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export const DirectLogin = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return !isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/pos" />
  );
};

export const Login = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return !isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/pos" />
  );
};
