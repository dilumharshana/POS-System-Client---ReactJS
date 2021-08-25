import { Divider } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.css";
import "./featureStyles.css";

import { features } from "./featureList";

const Icon = (props) => (
  <div
    className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex  justify-content-center order-md-${
      props.index % 2 == 0 ? "1" : "2"
    } order-2`}
  >
    <img
      className="img-fluid"
      src={props.feature.img}
      alt={props.feature.img}
      width="35%"
      height="30%"
      data-aos={props.index % 2 == 0 ? "fade-right" : "fade-left"}
    />
  </div>
);

const Description = (props) => (
  <div
    className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-lg-5 d-flex align-items-center order-md-${
      props.index % 2 == 0 ? "2" : "1"
    } order-2 mt-2`}
    data-aos={props.index % 2 == 0 ? "fade-left" : "fade-right"}
    style={{
      textAlign:
        props.width <= 800 ? "center" : props.index % 2 == 1 ? "right" : "left",
    }}
  >
    <div>
      <h4>{props.feature.topic}</h4>
      <p className="featureDescription pt-3">{props.feature.description}</p>
    </div>
  </div>
);

export const Features = (feature) => {
  const deviceWidth = useSelector((store) => store.deviceWidth);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="container-fluid  featureContainer ">
      <h3 className="mt-4 mb-5 text-center">What can you get free . .</h3>
      <div className="container">
        {features.map((feature, index) => (
          <div className="row pb-5">
            <Icon feature={feature} index={index} />
            <Description
              feature={feature}
              animationAlignment="fade-left"
              width={deviceWidth}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
