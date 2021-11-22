import Button from "react-bootstrap/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

//components
import { InputField } from "./components/inputField";
import { Box } from "@mui/system";

export const ItemForm = ({ formik, loading, buttonText }) => (
  <>
    {/* //barcode  */}
    <InputField
      label="Item Code"
      type="text"
      placeholder="Item Code"
      name="itemCode"
      value={formik.values.itemCode}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={formik.touched.itemCode && Boolean(formik.errors.itemCode)}
      error={formik.errors.itemCode}
    />
    {/* //item name */}
    <InputField
      label="Item Name"
      type="text"
      placeholder="Item Name"
      name="itemName"
      value={formik.values.itemName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={formik.touched.itemName && Boolean(formik.errors.itemName)}
      error={formik.errors.itemName}
    />
    {/* //cash price */}
    <InputField
      label="Cash Price"
      type="text"
      placeholder="Cash Price"
      name="cashPrice"
      value={formik.values.cashPrice}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={formik.touched.cashPrice && Boolean(formik.errors.cashPrice)}
      error={formik.errors.cashPrice}
    />
    {/* //selling price */}
    <InputField
      label="Selling Price"
      type="text"
      placeholder="Selling Price"
      name="sellingPrice"
      value={formik.values.sellingPrice}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={
        formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)
      }
      error={formik.errors.sellingPrice}
    />
    {/* //stock */}
    <InputField
      label="Quantity"
      type="text"
      placeholder="Quantity"
      name="quantity"
      value={formik.values.quantity}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={formik.touched.quantity && Boolean(formik.errors.quantity)}
      error={formik.errors.quantity}
    />
    {/* //product description */}
    <InputField
      label="Description"
      type="text"
      placeholder="description"
      name="description"
      value={formik.values.description}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={
        formik.touched.description && Boolean(formik.errors.description)
      }
      error={formik.errors.description}
    />
    {/* //image */}
    <InputField
      label="Item Image"
      id="itemImage"
      type="file"
      name="itemImage"
      accept=".jpg , .jpeg , .png"
      onChange={(event) => {
        formik.setFieldValue("itemImage", event.currentTarget.files[0]);
      }}
    />
    {/* //submit button */}
    {loading ? (
      <Box mt={5}>
        <LinearProgress />
      </Box>
    ) : (
      <Button type="submit" className="mt-4" style={{ width: "100%" }}>
        {buttonText}
      </Button>
    )}
  </>
);
