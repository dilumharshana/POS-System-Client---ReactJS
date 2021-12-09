import { LOAD_SYSTEM_STOCK } from "../../types";
import axios from "axios";
import { config } from "../../../configs/jsonConfig";

export const setStock = (systemID) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/possystems/getstock/${systemID}`,
      config
    );
    console.log(data)
    return dispatch({
      type: LOAD_SYSTEM_STOCK,
      payload: data,
    });
  } catch (error) {
    return error;
  }
};
