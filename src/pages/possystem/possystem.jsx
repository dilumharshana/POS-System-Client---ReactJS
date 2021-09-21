import { Button } from "@material-ui/core";

//actions
import { useHistory } from "react-router-dom";

export const PosSystem = () => {
  const history = useHistory();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem("UserPosSystem");
          history.push("/login");
        }}
      >
        log out
      </Button>
    </>
  );
};
