import customerCare from "../../assests/customerCare/customerCare.png";

//styles
import "./customerSupportStyles.css";

export const CustomerSupport = () => {
  return (
    <div className="container-fluid root mt-5 ">
      <div className="row">
        <div className="row">
          <h3 className="heading pt-5">Cusotomer support</h3>
        </div>
        <div className="d-flex justify-content-center mt-5 pb-5">
          <img
            src={customerCare}
            className="img-fluid"
            width="100"
            height="100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
