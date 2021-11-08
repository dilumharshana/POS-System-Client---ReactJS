import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles((theme) => ({
    // formWrapperDiv: {
    //   height: "100px",
    //   overflow:'hidden'
    // },
    stockItemCardRoot: {
      // card root box
      width: "80%",
    },
    root: {
      width: "70%",
    },
    formElementHolders: {
      width: "60%",
    },
    formLabels: {
      color: "#5897fc",
    },
    wrapperPaper: {
      //main paper
      border: "1px solid #ababab",
    },
    cardContentRootBox: {
      // prices and quantitiy box holding root box
      width: "100%",
    },
    itemName: {
      //stock item name
      fontFamily: "arial",
      fontWeight: "bold",
      color: "#2b2b2b",
    },
    descriptionBox: {
      //description side root box
      width: "65%",
    },
    imageBox: {
      //image side root box
      width: "35%",
      overflow: "hidden",
    },
    prices: {
      //prices boxes
      width: "35%",
      textAlign: "center",
      borderRight: "1px solid #ababab",
    },
    quantity: {
      //quantity boxes
      textAlign: "center",
      width: "30%",
    },
    dataTitles: {
      // prices and quantitiy heading
      fontFamily: "arial , sns-serif",
      fontWeight: "bold",
      color: "#737373",
    },
    values: {
      //data values
      color: "blue",
    },
    cardActionArea: {
      //card action area box
      borderTop: "1px solid grey",
    },
  }));
