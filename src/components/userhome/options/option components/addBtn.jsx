import { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

//components
import { Popus } from "../../../popus/popus";
import { NewSystemCreator } from "../../../newSystemCreator/newSystemCreator";

//styles
import { styles } from "../optionStyles";

export const AddBtn = () => {
  const [open, setOpen] = useState(false);
  const classes = styles()();

  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button
        className={classes.btnAdd}
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        <AddCircleIcon fontSize="large" />
      </Button>
      <Popus open={open} animation="fade-down">
        <NewSystemCreator close={() => setOpen(false)} />
      </Popus>
    </Grid>
  );
};
