import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

//pages
import { IndexPage } from "./pages/indexPage/indexPage";
import { UserLogin } from "./components/userLogin/userLogin";
import { UserRegister } from "./components/userRegister/userRegister";
import { PosSystem } from "./pages/possystem/possystem";
import { NotFound } from "./pages/notFound/notFound";

//user login chek
const userLogin = localStorage.getItem("userInfo");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/login">
              {userLogin ? <PosSystem /> : <UserLogin />}
            </Route>
            <Route exact path="/">
              {userLogin ? <PosSystem /> : <IndexPage />}
            </Route>
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
