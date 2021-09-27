import axios from "axios";
import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";
import { config } from "../../../configs/jsonConfig";

export const handleSystemLoader = async (
  systemId,
  userEnterdPassword,
  history
) => {
  try {
    //verify passwords
    await axios.post(
      "/api/possystems/authsystem",
      {
        dbName: systemId,
        password: userEnterdPassword,
      },
      config
    );

    //login user into pos system and setting a token in localstorage
    localStorage.setItem(
      "UserPosSystem",
      await bcryptjs.hash(systemId.toString(), await bcryptjs.genSalt(10))
    );

    //redirecting user to pos system if everyting is correct
    return history.push("/pos");
  } catch (error) {
    return toast.error(error.response.data, {
      position: "bottom-right",
      theme: "colored",
      autoClose: 3000,
    });
  }
};
