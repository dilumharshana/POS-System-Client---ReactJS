import { useEffect, useRef } from "react";
import AOS from "aos";

//styles
import "./popupStyles.css";

export const Popus = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  const wrapperDiv = useRef();

  const closePopup = (e) => {
    if (wrapperDiv.current === e.target) return props.close();
  };

  return props.open === true ? (
    <div ref={wrapperDiv} className="popupWrapper" onClick={closePopup}>
      <div className="popupBox">
        <div data-aos={props.animation}> {props.children}</div>
      </div>
    </div>
  ) : null;
};
