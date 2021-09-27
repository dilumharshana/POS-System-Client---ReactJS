import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import localStorage from "redux-persist/es/storage";

export const System = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <button
            onClick={() => {
              localStorage.removeItem("UserPosSystem");
              props.history.push("/login");
            }}
          >
            log out
          </button>
        </Toolbar>
      </AppBar>
    </>
  );
};
