import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

//pages
import { IndexPage } from "./pages/indexPage/indexPage";
import { UserLogin } from "./components/userLogin/userLogin";
import { UserRegister } from "./components/userRegister/userRegister";
import { UserHome } from "./pages/userhome/userhome";
import { NotFound } from "./pages/notFound/notFound";
import { Payments } from "./pages/payments/payments";
import {
  ProtectedLogin,
  DirectLogin,
  Login,
  PaymentsPage,
} from "./pages/protectedLogin/protectedRoutes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/register" component={UserRegister} />
            <Login exact path="/login" component={UserLogin} />
            <DirectLogin exact path="/" component={IndexPage} />
            <ProtectedLogin exact path="/userHome" component={UserHome} />
            <PaymentsPage exact path="/payments" component={Payments} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
