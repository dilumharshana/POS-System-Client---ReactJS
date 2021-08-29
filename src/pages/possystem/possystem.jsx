import { Button } from "@material-ui/core";
import { useEffect } from "react";

//actions
import { useHistory } from "react-router-dom";

export const PosSystem = () => {
  const history = useHistory();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  return (
    <>
      <h1>hello pos window</h1>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem("userInfo");
          history.push("/login");
        }}
      >
        log out
      </Button>
    </>
  );
};
