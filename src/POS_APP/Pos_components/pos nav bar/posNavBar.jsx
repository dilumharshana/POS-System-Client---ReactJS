import { useSelector } from "react-redux";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import StoreIcon from "@mui/icons-material/Store";

//styles
import { styles } from "./posNavBarStyles";
import { Box } from "@mui/system";

export const PosNavBar = (props) => {
  const { history } = props;

  //setting styles
  const classes = styles()();

  //getting current system
  const currentSystem = useSelector((store) => store.currentSystem);

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
        <IconButton
          onClick={() => {
            localStorage.removeItem("UserPosSystem");
            history.push("/login");
          }}
          className={classes.powerBtn}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
