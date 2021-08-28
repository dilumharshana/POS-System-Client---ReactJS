import { useSelector } from "react-redux";
import { Grid, Toolbar, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";

//asests
import backgroundVideo from "../../assests/banner/backgroundVideo.mp4";
import mobileBannerImg from "../../assests/mobile/mobileBannerImg.jpg";

//styles
import "./bannerStyles.css";
import { styles } from "./bannerStyles";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const Banner = () => {
  const useStyles = styles();
  const classes = useStyles();

  //setting device width from store
  const deviceWidth = useSelector((store) => store.deviceWidth);

  //for large screens
  const pcBanner = () => (
    <Grid container justifyContent="center">
      <Grid item className={classes.videoContainer}>
        <video id="" className="video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </Grid>

      {/* brandname */}
      <Grid
        item
        className={clsx(classes.bannerContent, classes.brandName)}
        pt={10}
      >
        <h1 className="brandName">EVONPOS</h1>
      </Grid>

      {/* description */}
      <Grid
        item
        className={clsx(classes.bannerContent, classes.description)}
        mt={2}
      >
        <p className="description">Free online POS System to manage your BIZ</p>
      </Grid>

      {/* //usefree button */}
      <Grid item className={classes.bannerContent}>
        <Link to="/register" exact>
          <Button className={classes.useFreeBtn} variant="contained">
            USE FREE
          </Button>
        </Link>
      </Grid>

      <Grid
        className={clsx(classes.bannerContent, classes.expandButton)}
        onClick={() => setTimeout(window.scrollBy(0, window.innerHeight), 500)}
      >
        <ExpandMoreIcon fontSize="large" />
      </Grid>
    </Grid>
  );

  const mobileBanner = () => (
    <Grid container justifyContent="center">
      <Grid item className={classes.videoContainer}>
        <img
          src={mobileBannerImg}
          alt="super market"
          className="img-fluid mobileBannerImage"
        />
      </Grid>

      <Grid item className={classes.mobileBannerContainer}>
        <Button className={classes.mobileUseFreeBtn} variant="contained">
          USE FREE
        </Button>
      </Grid>
    </Grid>
  );

  if (deviceWidth <= 800) return mobileBanner();
  return pcBanner();
};
