import { ButtonBase } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import "./benifitsStyles.css";

import { benifits } from "./benifitsList";

export const Benifits = () => {
  return (
    <div className="container-fluid" className="mt-5">
      <h3 className="mt-4 mb-5 p-2 text-center benifitHeader">
        Better business enviornment with
      </h3>
      <div className="row pt-1">
        {benifits.map((benifit) => (
          <div className="col-sm-12 col-md-4 col-xl-4 d-flex flex-column justify-content-center align-items-center direction mt-3">
            <ButtonBase>
              <img
                src={benifit.img}
                className="img-fluid"
                width="35%"
                height="35%"
                alt=""
              />
            </ButtonBase>
            <p className="benifitDescription mt-4">{benifit.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
