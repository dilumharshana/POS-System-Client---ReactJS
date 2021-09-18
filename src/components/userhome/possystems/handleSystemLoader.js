import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";

export const handleSystemLoader = async (
  systemId,
  password,
  userEnterdPassword,
  history
) => {
  try {
    //compare passwords
    const passwordValidity = await bcryptjs.compare(
      userEnterdPassword,
      password
    );

    //login user into pos system and setting a token in localstorage
    if (passwordValidity) {
      localStorage.setItem(
        "UserPosSystem",
        await bcryptjs.hash(systemId.toString(), await bcryptjs.genSalt(10))
      );
      return history.push("/pos");
    }
    return toast.error("Password Incorrect", {
      position: "bottom-center",
      autoClose: 2000,
    });
  } catch (error) {
    return toast.error(error.response.data);
  }
};
