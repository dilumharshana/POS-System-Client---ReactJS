import { Grid, Box, Typography } from "@material-ui/core";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useSelector } from "react-redux";
import { GenCategories } from "./genCategories";

//category items
import { cateos } from "./categoryItems";

//styles
import { styles } from "./categoryStyles";
// import "./categoryStyle.css";

//swiper
SwiperCore.use([Pagination]);

export const Categories = () => {
  const deviceWidth = useSelector((store) => store.deviceWidth);
  const classes = styles()();

  const pcView = () => (
    <Box mt={4}>
      <Box>
        <Typography className={classes.categoryHeading} variant="h4">
          Who can use ...
        </Typography>
      </Box>

      <Box mt={4}>
        <Grid container justifyContent="center">
          {cateos.map((cat) => (
            <GenCategories cat={cat} />
          ))}
        </Grid>
      </Box>
    </Box>
  );

  const mobileView = () => (
    <Box mt={4}>
      <Box mb={2}>
        <Typography className={classes.categoryHeading} variant="h5">
          Free Online POS for..
        </Typography>
      </Box>
      <Box
        className={classes.swiperContainer}
        display="flex"
        justifyContent="center"
      >
        <Box>
          <GenCategories />
        </Box>
      </Box>
    </Box>
  );

  return deviceWidth > 800 ? pcView() : mobileView();
};
