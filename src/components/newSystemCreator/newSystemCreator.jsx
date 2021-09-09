import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Paper } from "@material-ui/core";

import { stylesSet } from "./newSystemCreatorStyles.js";

//components
import { SystemData } from "./systemData/systemData";
import { SystemInfo } from "./systemInfo/systemInfo";

export const NewSystemCreator = (props) => {
  const [page, setPage] = useState(1);

  // system data states
  const [name, setName] = useState(null);
  const [password, setpassWord] = useState(null);
  const [type, setType] = useState("Grocery");

  let deviceWidth = useSelector((store) => store.deviceWidth);
  const styles = stylesSet(deviceWidth);

  return (
    <>
      <Paper style={styles.root}>
        <Box p={3}>
          {page === 1 ? (
            <SystemData
              changePage={() => setPage(2)}
              deviceWidth={deviceWidth}
              close={props.close}
              name={name}
              password={password}
              type={type}
              setName={(value) => setName(value)}
              setpassWord={(value) => setpassWord(value)}
              setType={(value) => setType(value)}
            />
          ) : (
            <SystemInfo
              changePage={() => setPage(1)}
              close={props.close}
              name={name}
              password={password}
              type={type}
              deviceWidth={deviceWidth}
              close={props.close}
            />
          )}
        </Box>
      </Paper>
    </>
  );
};
