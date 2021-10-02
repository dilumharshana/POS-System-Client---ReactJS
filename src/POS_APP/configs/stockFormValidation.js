import { useFormik } from "formik";
import * as yup from "yup";

export const stockFormValidations = (onSubmit) => () => {
  //validation schema
  const validationSchema = yup.object({
    itemCode: yup.string().required("requried"),
    itemName: yup.string().required("requried"),
    cashPrice: yup
      .number()
      .typeError("Invalid cash price")
      .required("requried"),
    sellingPrice: yup
      .number()
      .typeError("Invalid selling price")
      .required("requried"),
    quantity: yup
      .number()
      .typeError("Invalid quantity")
      .required("requried")
      .positive("Invalid new adding quantity"),
    itemImage: yup.mixed().required("choose image to upload"),
  });

  return useFormik({
    initialValues: {
      itemCode: "",
      itemName: "",
      cashPrice: "",
      sellingPrice: "",
      quantity: "",
      itemImage: "",
    },
    validationSchema,
    onSubmit,
  });
};
