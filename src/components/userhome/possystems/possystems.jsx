import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";

//assests
import grocery from "../../../assests/systems/grocery.jpg";

//styles
import { styles } from "./possystemsStyles";

export const PosSystems = () => {
  const classes = styles()();

  // const {
  //   currentUser: { possystems },
  // }

  const systems = useSelector((store) => store.currentUser.possystems);
  console.log(systems);

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      {systems && systems.length > 0 ? (
        systems &&
        systems.map((system) => (
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia image={grocery} className={classes.image} />
                <CardContent>{system.name}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid>Create a system</Grid>
      )}
    </Grid>
  );
};
