import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

//components
import { SystemList } from "./systemList";
import { SystemSearch } from "../options/option components/systemSearch";

export const PosSystems = (props) => {
  const {
    currentUser: { possystems: systems, _id: owner },
    systemSearch,
  } = useSelector((store) => store);

  const { search, deviceWidth } = props;

  //systems not loaded
  if (!systems || systems.length === 0) {
    return <Grid>Create a system</Grid>;
  }

  const defaultSystemList = () => (
    <Grid container direction="column">
      {systems &&
        systems.map((system) => <SystemList system={system} _id={owner} />)}
    </Grid>
  );

  //something typed in search box
  const searchResults = () => {
    const searchResult = systems.filter((system) =>
      system.name.toLowerCase().includes(systemSearch.toLowerCase())
        ? system
        : null
    );
    if (searchResult.length > 0)
      return (
        <Grid container direction="column">
          {searchResult.map((system) => (
            <SystemList system={system} _id={owner} />
          ))}
        </Grid>
      );

    return <Grid>No result found !</Grid>;
  };

  return (
    <>
      <center>{deviceWidth < 1280 ? <SystemSearch /> : null}</center>
      {systemSearch && systemSearch.length > 0
        ? searchResults()
        : defaultSystemList()}
      ,
    </>
  );
};
