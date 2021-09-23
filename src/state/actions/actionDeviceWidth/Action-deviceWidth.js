import { DEVICE_WIDTH } from "../../types";

export const setDeviceWidth = () => (dispatch) => {
  return dispatch({
    type: DEVICE_WIDTH,
    payload: window.innerWidth,
  });
};
