import { useHistory } from "react-router";
import axios from "axios";
import { bindActionCreators } from "redux";

//login process action
import { setLoginProcess } from "../../state/actions/actionLoginProcess/actionLoginProcess";

//api config file
import { config } from "../../configs/jsonConfig";

//user authentication function
export const logUser = async (data, useDispatch, useSelector) => {
  const setLoading = bindActionCreators(setLoginProcess, useDispatch());
  const history = useHistory();
  try {
    setLoading(true);
    const { data } = await axios.post(
      "http://localhost:2001/api/login",
      data,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data));
    history.push("/pos");
    setLoading(false);
  } catch (error) {
    userLoginState({ state: false, message: error.response.data });
    setLoading(false);

    setTimeout(() => userLoginState({ state: true, message: null }), 3000);
  }
};
