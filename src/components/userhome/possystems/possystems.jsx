import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

//components
import { SystemList } from "./systemList";
import { SystemSearch } from "../options/systemSearch";

export const PosSystems = (props) => {
  const {
    currentUser: { possystems: systems, _id: owner },
  } = useSelector((store) => store);

  return systems && systems.length > 0 ? (
    <Grid container direction="column">
      <center>{props.deviceWidth < 1280 ? <SystemSearch /> : null}</center>
      {systems &&
        systems.map((system) => <SystemList system={system} _id={owner} />)}
    </Grid>
  ) : (
    <Grid>Create a system</Grid>
  );
};
