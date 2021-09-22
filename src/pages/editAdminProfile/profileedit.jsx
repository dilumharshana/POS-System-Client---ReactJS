import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

//components
import { PersonalInfo } from "./components/personalInfo";

//style
import { style } from "./components/editProfileStyles";
import "react-toastify/dist/ReactToastify.css";

export const ProfileEdit = () => {
  const deviceWidth = useSelector((store) => store.deviceWidth);

  const classes = style(deviceWidth)();
  return (
    <Grid container direction="column" alignItems="center">
      {/* //personal information */}
      <PersonalInfo />
    </Grid>
  );
};
