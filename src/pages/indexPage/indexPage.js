import { Grid } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

//components
import { NavBar } from "../../components/navbar/navbar";
import { Banner } from "../../components/banner/banner";
import { Categories } from "../../components/categories/categories";
import { Features } from "../../components/features/features";
import { Benifits } from "../../components/benifits/benifits";
import { CustomerSupport } from "../../components/customerSupport/customerSuport";

//actions
import { setDeviceWidth } from "../../state/actions/actionDeviceWidth/Action-deviceWidth";

export const IndexPage = () => {
  const setNewDeviceWidth = bindActionCreators(setDeviceWidth, useDispatch());
  window.onresize = () => setNewDeviceWidth();
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <NavBar noLoginBtn="false" />
      </Grid>

      <Grid item>
        <Banner />
      </Grid>

      <Grid item>
        <Categories />
      </Grid>

      <Features />

      <Grid item>
        <Benifits />
      </Grid>

      <CustomerSupport />
    </Grid>
  );
};
