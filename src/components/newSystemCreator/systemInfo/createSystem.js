import axios from "axios";
import { config } from "../../../configs/jsonConfig";

//system creator
export const createSystem = async ({
  name,
  owner,
  password,
  type,
  isPremium,
}) => {
  try {
    const newSystem = {
      name,
      owner,
      password,
      type,
      isPremium,
      isActivated: true,
    };

    const response = await axios.post(
      "http://localhost:2001/api/possystems/create",
      newSystem,
      config
    );

    return response;
  } catch (error) {
    return error;
  }
};
