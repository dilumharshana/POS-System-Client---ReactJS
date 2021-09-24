import { Grid, Box, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BeenhereIcon from "@material-ui/icons/Beenhere";

//components
import { ProfileInfo } from "./components/profileInfo";
import { PremiumBtn } from "../../premeiumBtn/premiumBtn";

//styles
import { styles } from "./profileStyles";

export const Profile = (props) => {
  const currentUser = useSelector((store) => store.currentUser);

  const classes = styles(currentUser)();

  return (
    <Grid container alignItems="center" direction="column">
      {/* //profile information */}
      <ProfileInfo classes={classes} currentUser={currentUser} />

      {/* //account type  */}
      <Grid item>
        {
          <Box display="flex" mt={1} className={classes.isPremiumBox} p={1}>
            <Box>
              {currentUser.isPremium === true ? (
                <BeenhereIcon className={classes.isPremiumbadge} />
              ) : (
                <BookmarkBorderIcon className={classes.isPremiumbadge} />
              )}
            </Box>
            <Box ml={1}>
              {currentUser.isPremium === true
                ? "Premeium Edition"
                : "Free Use Edition"}
            </Box>
          </Box>
        }
      </Grid>
      {!currentUser.isPremium ? (
        <Grid>
          <Box mt={3}>
            <PremiumBtn />
          </Box>
        </Grid>
      ) : null}

      {/* // sign out btn in mobile view  */}
      {props.mobileView === true ? (
        <Box mt={10}>
          <Button
            className={classes.btnLogOut}
            variant="outlined"
            size="normal"
            onClick={() => {
              localStorage.removeItem("userInfo");
              props.history.push("/login");
            }}
          >
            Sign Out
          </Button>
        </Box>
      ) : null}
    </Grid>
  );
};
