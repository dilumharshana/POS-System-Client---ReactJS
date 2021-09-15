import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

//components
import { SystemList } from "./systemList";
import { SystemSearch } from "../options/systemSearch";

export const PosSystems = (props) => {
  const {
    currentUser: { possystems: systems, _id: owner },
  } = useSelector((store) => store);

  const { search, deviceWidth } = props;

  //systems not loaded
  if (!systems || systems.length === 0) {
    return <Grid>Create a system</Grid>;
  }

  //something typed in search box
  if (search.length > 0) {
    const searchResult = systems.filter((system) =>
      system.name.toLowerCase().includes(search.toLowerCase()) ? system : null
    );
    if (searchResult.length > 0)
      return (
        <Grid container direction="column">
          {
            ((
              <center>
                {props.deviceWidth < 1280 ? <SystemSearch /> : null}
              </center>
            ),
            searchResult.map((system) => (
              <SystemList system={system} _id={owner} />
            )))
          }
        </Grid>
      );

    return <Grid>No result found !</Grid>;
  }

  return (
    <Grid container direction="column">
      <center>
        {deviceWidth < 1280 ? (
          <SystemSearch setSearch={props.setSearch} />
        ) : null}
      </center>
      {systems &&
        systems.map((system) => <SystemList system={system} _id={owner} />)}
    </Grid>
  );
};
