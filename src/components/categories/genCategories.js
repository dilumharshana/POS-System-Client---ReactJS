import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules

//components
import { CategoryCard } from "./categorycard";
import { cateos } from "./categoryItems";

//styles
import { styles } from "./categoryStyles";

//slide autoplay configs
SwiperCore.use(Autoplay);

export const GenCategories = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  //deveice width
  const deviceWidth = useSelector((store) => store.deviceWidth);

  //props defacturing
  const cardDataSet = props.cat;

  //styles for parsing as props
  const useStyles = styles();
  const classes = useStyles();

  // mobile view
  const mobileView = () => (
    <Swiper
      // slidePerView={}
      // spaceBetween={7}
      freeMode={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      style={{ width: "100vw" }}
    >
      {cateos.map((cardDataSet) => (
        <SwiperSlide style={{ paddingBottom: "10px" }}>
          <CategoryCard cardData={cardDataSet} classes={classes} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  //pc view
  const pcView = () => (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} data-aos="fade">
      <CategoryCard cardData={cardDataSet} classes={classes} />
    </Grid>
  );

  return deviceWidth > 800 ? pcView() : mobileView();
};
