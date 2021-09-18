import {
  Grid,
  Box,
  Avatar,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import StoreIcon from "@mui/icons-material/Store";

//components
import { PremiumBtn } from "../../premeiumBtn/premiumBtn";

//assets
import profilepic from "../../../assests/profile/profilepic.jpg";

//styles
import { styles } from "./profileStyles";
import { StyledBadge } from "./profileStyles";

export const Profile = (props) => {
  const currentUser = useSelector((store) => store.currentUser);

  const classes = styles(currentUser)();

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
      <Grid>
        <Box display="flex" mt={2}>
          <Box>
            <StoreIcon />
          </Box>
          <Box className={classes.email} ml={2}>
            owns {currentUser.possystems && currentUser.possystems.length}{" "}
            active systems
          </Box>
        </Box>
      </Grid>

      <Grid item>
        {
          <Box display="flex" mt={3} className={classes.isPremiumBox} p={1}>
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
          <PremiumBtn />
        </Grid>
      ) : null}

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

      <Grid></Grid>
    </Grid>
  );
};
