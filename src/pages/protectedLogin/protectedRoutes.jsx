import { Route, Redirect } from "react-router-dom";

//direct login to pos
export const ProtectedLogin = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

//login => site loading
export const DirectLogin = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return !isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/pos" />
  );
};

//user home
export const Login = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return !isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/pos" />
  );
};

//payments
export const PaymentsPage = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
