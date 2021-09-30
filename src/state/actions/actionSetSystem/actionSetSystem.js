import { LOAD_SYSTEM } from "../../types";
import axios from "axios";
import { config } from "../../../configs/jsonConfig";

export const setSystem = (systemID) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/possystems/${systemID}`, config);

    return dispatch({
      type: LOAD_SYSTEM,
      payload: data,
    });
  } catch (error) {
    return error;
  }
};
