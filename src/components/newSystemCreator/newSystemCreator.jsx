import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Paper } from "@material-ui/core";

import { stylesSet } from "./newSystemCreatorStyles.js";

//components
import { SystemData } from "./systemData/systemData";
import { SystemInfo } from "./systemInfo/systemInfo";

export const NewSystemCreator = (props) => {
  const [page, setPage] = useState(1);

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
            />
          ) : (
            <SystemInfo
              changePage={() => setPage(1)}
              deviceWidth={deviceWidth}
              close={props.close}
            />
          )}
        </Box>
      </Paper>
    </>
  );
};
