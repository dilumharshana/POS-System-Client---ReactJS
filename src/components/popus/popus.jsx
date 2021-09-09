import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import AOS from "aos";

//styles
import { styles } from "./popupStyles.js";

export const Popus = (props) => {
  const deviceWidth = useSelector((store) => store.deviceWidth);
  const style = styles(deviceWidth);

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  const wrapperDiv = useRef();

  return props.open === true ? (
    <div ref={wrapperDiv} style={style.popupWrapper}>
      <div style={style.popupBox}>
        <div data-aos={props.animation}> {props.children}</div>
      </div>
    </div>
  ) : null;
};
