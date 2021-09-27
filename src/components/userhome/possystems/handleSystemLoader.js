import axios from "axios";
import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";
import { config } from "../../../configs/jsonConfig";

export const handleSystemLoader = async (systemId, userEnterdPassword) => {
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

    //setting a token in localstorage
    return localStorage.setItem(
      "UserPosSystem",
      await bcryptjs.hash(systemId.toString(), await bcryptjs.genSalt(10))
    );
  } catch (error) {
    return toast.error(error.response.data, {
      position: "bottom-right",
      theme: "colored",
      autoClose: 3000,
    });
  }
};
