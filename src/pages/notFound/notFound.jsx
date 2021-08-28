import { Box, CircularProgress, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
      direction="column"
      spacing={5}
    >
      <Grid>
        <Box display="flex">
          <Box>
            <h1>Hmm.. Page not found !</h1>
          </Box>
          <Box pl={4}>
            <CircularProgress />
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box mt={5}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p>Click here to Register and use for free</p>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
