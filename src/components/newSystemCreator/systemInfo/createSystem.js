import axios from "axios";

//system creator
export const createSystem = ({ name, password, type }) => {
  const newSystem = {
    name,
    password,
    type,
    isPremium: "free",
    isActivated: true,
  };
};
