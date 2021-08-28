import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

export const PosSystem = () => {
  const history = useHistory();
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
