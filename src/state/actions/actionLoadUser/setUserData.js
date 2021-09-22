import axios from "axios";
import { LOAD_USER } from "../../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const setUserData = () => async (dispatch) => {
  try {
    //user information
    const { data } = await axios.get(
      `api/users/${localStorage.getItem("userInfo")}`
    );

    //profilepicture
    const profilePicture = await axios.get(
      `api/users/profilePicture/${data._id}`,
      { responseType: "blob" }
    );

    //setting image
    const adminProfilePicture = URL.createObjectURL(profilePicture.data);

    const user = { ...data, adminProfilePicture };
    return dispatch({
      type: LOAD_USER,
      payload: user,
    });
  } catch (error) {
    return toast.error("Unable to update profile data", {
      position: "bottom-right",
      theme: "colored",
    });
  }
};
