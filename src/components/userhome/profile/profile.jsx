import { Grid, Box, Avatar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

//assets
import profilepic from "../../../assests/profile/profilepic.jpg";

//styles
import { styles } from "./profileStyles";
import { StyledBadge } from "./profileStyles";

export const Profile = () => {
  const currentUser = useSelector((store) => store.currentUser);

  const classes = styles()();

  return (
    <Grid container alignItems="center" direction="column">
      <Grid item xs={6}>
        <StyledBadge
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            alt={currentUser.name}
            src={profilepic}
            className={classes.profilePic}
          />
        </StyledBadge>
      </Grid>
      <Grid item>
        <Box mt={2}>
          <Typography variant="h6" className={classes.userName}>
            {currentUser.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box className={classes.email}>{currentUser.email}</Box>
      </Grid>
    </Grid>
  );
};
