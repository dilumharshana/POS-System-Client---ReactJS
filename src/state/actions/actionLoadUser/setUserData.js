import axios from "axios";
import { LOAD_USER } from "../../types";

export const setUserData = () => async (dispatch) => {
  try {
    const user = await axios.get(
      `http://localhost:2001/api/users/${localStorage.getItem("userInfo")}`
    );
    return dispatch({
      type: LOAD_USER,
      payload: user.data,
    });
  } catch (error) {
    console.log(error);
  }
};
