import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

//pages
import { IndexPage } from "./pages/indexPage/indexPage";
import { UserLogin } from "./components/userLogin/userLogin";
import { UserRegister } from "./components/userRegister/userRegister";
import { UserHome } from "./pages/userhome/userhome";
import { Payments } from "./pages/payments/payments";
import { PosSystem } from "./pages/possystem/possystem";
import { ProfileEdit } from "./pages/editAdminProfile/profileedit";
import { NotFound } from "./pages/notFound/notFound";
import {
  ProtectedLogin,
  DirectLogin,
  Login,
  PaymentsPage,
  LoadPosSystem,
  LoadAdminProfileEdit,
} from "./pages/protectedLogin/protectedRoutes";

const uh = process.env.REACT_APP_USERHOME;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App>
            <Switch>
              <Route exact path="/register" component={UserRegister} />
              <Login exact path="/login" component={UserLogin} />
              <ProtectedLogin exact path={uh} component={UserHome} />
              <PaymentsPage exact path="/payments" component={Payments} />
              <LoadPosSystem exact path="/pos" component={PosSystem} />
              <LoadAdminProfileEdit
                exact
                path="/editAdmin"
                component={ProfileEdit}
              />
              <DirectLogin exact path="/" component={IndexPage} />
              <Route component={NotFound} />
            </Switch>
          </App>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
