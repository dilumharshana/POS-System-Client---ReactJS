import { useState } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

//components
import { Popus } from "../../popus/popus";
import { NewSystemCreator } from "../../newSystemCreator/newSystemCreator";

//styles
import { styles } from "./optionStyles";

export const Options = () => {
  const [open, setOpen] = useState(false);
  const classes = styles()();

  return (
    <Grid container alignItems="center" direction="column">
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          className={classes.btnAdd}
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          <AddCircleIcon fontSize="large" />
        </Button>
        <Popus open={open} close={() => setOpen(false)} animation="fade-down">
          <NewSystemCreator close={() => setOpen(false)} />
        </Popus>
      </Grid>
    </Grid>
  );
};
