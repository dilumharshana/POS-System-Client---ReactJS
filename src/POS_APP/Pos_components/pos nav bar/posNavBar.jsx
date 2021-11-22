import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import StoreIcon from "@mui/icons-material/Store";

//styles
import { styles } from "./posNavBarStyles";
import { Box, typography } from "@mui/system";

export const PosNavBar = (props) => {
  //setting styles
  const classes = styles()();

  //getting current system
  const { currentSystem, tabName } = useSelector((store) => store);

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Box>
            <StoreIcon />
          </Box>
          <Box ml={2}>
            <Typography variant="h5" className={classes.logoName}>
              {currentSystem.name}
            </Typography>
          </Box>
        </Box>
        <Box
          className={classes.tabName}
          p={1}
          display="flex"
          alignItems="center"
        >
          <Box className={classes.arrow} mr={1}>
            {"<"}
          </Box>
          <Box>{tabName}</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
