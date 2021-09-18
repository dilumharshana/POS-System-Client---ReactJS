import { Grid } from "@material-ui/core";

//components
import { SystemSearch } from "./option components/systemSearch";
import { AddBtn } from "./option components/addBtn";
import { Recyclebin } from "./option components/recyclebin";

export const Options = (props) => {
  return (
    <Grid container alignItems="center" direction="column">
      {/* //search */}
      {props.deviceWidth < 1024 ? null : (
        <SystemSearch setSearch={props.setSearch} />
      )}

      {/* //add system btn */}
      <AddBtn />

      {/* //system recycle bin */}
      <Recyclebin />
    </Grid>
  );
};
