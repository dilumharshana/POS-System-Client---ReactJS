import { Route, Redirect } from "react-router-dom";

//direct login to pos
export const ProtectedLogin = ({ component, ...pathProps }) => {
  //if user loged in to account
  const isAuthorized = localStorage.getItem("userInfo");

  //if user loed in to pos systems too
  const isPosSystemAuthorizes = localStorage.getItem("UserPosSystem");

  return isAuthorized ? (
    isPosSystemAuthorizes ? (
      <Redirect to="/pos" />
    ) : (
      <Route {...pathProps} component={component} />
    )
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

//pos system
export const LoadPosSystem = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("UserPosSystem");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/userHome" />
  );
};

//admin profilr edit
export const LoadAdminProfileEdit = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("userInfo");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

//stock items update
export const LoadStockItemsUpdate = ({ component, ...pathProps }) => {
  const isAuthorized = localStorage.getItem("UserPosSystem");
  return isAuthorized ? (
    <Route {...pathProps} component={component} />
  ) : (
    <Redirect to="/pos" />
  );
};
