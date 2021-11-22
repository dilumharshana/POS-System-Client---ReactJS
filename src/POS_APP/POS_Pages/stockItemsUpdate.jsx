import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/form";
import axios from "axios";
import { toast } from "react-toastify";

//components
import { ItemForm } from "../Pos_components/stocks/itemform";

//validation
import { stockFormValidations } from "../../POS_APP/configs/stockFormValidation";

//json configs
import { jsonConfig, imageConfig } from "../configs/jsonConfig";

//actions
import { setStock } from "../../state/actions/actionSetStock/actionSetStock";
import { setSelectItem } from "../../state/actions/actionSelectedStockItem/actionSelectedStockItem";

export const StockItemsUpdate = () => {
  const [loading, setLoading] = useState(false);

  //currnt system
  const { nameId } = useSelector((store) => store.currentSystem);

  //selected stock item
  const stockItem = useSelector((store) => store.selectedStockItem);

  //currnt stock
  const stock = useSelector((store) => store.systemStock);

  //actions
  const reloadStock = bindActionCreators(setStock, useDispatch());
  const reloadSelectedStockItem = bindActionCreators(
    setSelectItem,
    useDispatch()
  );

  //history
  const history = useHistory();

  //this function pass to formik to run on onSubmit event
  const onSubmit = async () => {
    try {
      setLoading(true);
      //getting aws image upload url friom backend server

      //if image selected for upload
      let uploadUrl = "";
      if (formik.values.itemImage) {
        const { data: recievedUploadUrl } = await axios.get(
          `/api/useposapp/stock/generateImageUploadUrl/${formik.values.itemCode}`
        );

        uploadUrl = recievedUploadUrl;

        //uploading item image to aws bucket
        const x = await axios.put(
          uploadUrl,
          formik.values.itemImage,
          imageConfig
        );
        console.log(x);
      }

      //setting new item data object
      //extracting existing image data from formik object
      const {
        values: { itemImage, ...itemdata },
      } = formik;

      //setting new item data with new item data and systemID
      const newItemData = {
        systemID: nameId,
        ...itemdata,
        currentItemCode: stockItem.itemCode,
        itemImage: formik.values.itemImage
          ? uploadUrl.split("?")[0]
          : stockItem.itemImage,
      };

      //store item data in mongodb
      const response = await axios.post(
        "/api/useposapp/stock/update",
        newItemData,
        jsonConfig
      );

      //reload system stocks to redux
      reloadStock(nameId);
      reloadSelectedStockItem(response.data);

      //notify
      toast.success("Item Updated successfully !", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });

      setLoading(false);
      // history.push("/pos");
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      toast.error("Unable to update item , Try again !", {
        position: "bottom-right",
        theme: "colored",
      });
    }
  };

  //formik config with pasrsing handle submit event
  const useFormik = stockFormValidations(onSubmit, stock, stockItem);
  const formik = useFormik();

  return (
    <>
      {" "}
      {/* //app bar */}
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Item - {stockItem.itemName}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
      <Grid lg={12} xl={12} container>
        {/* form */}

        <Grid lg={6} xl={6} container justifyContent="center">
          <Grid lg={6} xl={6}>
            <Form onSubmit={formik.handleSubmit}>
              <Box mb={2}>
                <ItemForm
                  formik={formik}
                  loading={loading}
                  buttonText="Update"
                />
              </Box>
            </Form>
          </Grid>
        </Grid>
        <Grid lg={6} xl={6} container justifyContent="center">
          <Image src={stockItem.itemImage} width="50%" height="50%" />
        </Grid>
      </Grid>
    </>
  );
};
