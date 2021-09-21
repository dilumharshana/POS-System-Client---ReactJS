import axios from "axios";
import { LOAD_USER } from "../../types";

export const setUserData = () => async (dispatch) => {
  try {
    //user information
    const { data } = await axios.get(
      `api/users/${localStorage.getItem("userInfo")}`
    );

    //profilepicture
    const adminProfilePicture = await axios.get(
      `api/users/profilePicture/${data._id}`,
      { responseType: "blob" }
    );

    const user = { ...data, adminProfilePicture };

    return dispatch({
      type: LOAD_USER,
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};
