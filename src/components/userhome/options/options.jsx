import { Box, Button, Card, Grid, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

//styles
import { styles } from "./optionStyles";

export const Options = () => {
  const classes = styles()();

  return (
    <Grid container alignItems="center" direction="column">
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button className={classes.btnAdd} variant="outlined">
          <AddCircleIcon fontSize="large" />
        </Button>
      </Grid>
    </Grid>
  );
};
