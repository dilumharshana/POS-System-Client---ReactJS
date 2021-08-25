import { Box, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { styles } from "./categoryStyles";

//basic card component generator
export const CategoryCard = (props) => {
  return (
    <Box m={3}>
      <Box pb={2}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          {props.cardData.name}
        </Typography>
      </Box>
      <Box>
        <Card className={props.classes.categoryCard}>
          <CardActionArea>
            <CardMedia
              image={props.cardData.img}
              title={props.cardData.name}
              className={props.classes.cardImage}
            />
            <CardContent>{props.cardData.description}</CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
