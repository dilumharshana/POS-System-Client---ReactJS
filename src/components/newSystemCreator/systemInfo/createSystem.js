import axios from "axios";

//system creator
export const createSystem = ({ name, password, type: buissnesType }) => {
  const newSystem = {
    name,
    password,
    buissnesType,
    systemType: "free",
    isActivated: true,
  };
};
