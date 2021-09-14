import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

//components
import { SystemList } from "./systemList";

export const PosSystems = () => {
  const {
    currentUser: { possystems: systems, _id: owner },
  } = useSelector((store) => store);

  return systems && systems.length > 0 ? (
    <Grid container direction="column" spacing={4}>
      {systems &&
        systems.map((system) => <SystemList system={system} _id={owner} />)}
    </Grid>
  ) : (
    <Grid>Create a system</Grid>
  );
};
