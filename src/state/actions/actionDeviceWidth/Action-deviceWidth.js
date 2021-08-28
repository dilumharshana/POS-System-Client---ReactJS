import { DEVICE_WIDTH } from "../../types";

export const setDeviceWidth = () => ({
  type: DEVICE_WIDTH,
  payload: window.innerWidth,
});
