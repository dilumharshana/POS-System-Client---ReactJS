import { Formik, useFormik } from "formik";
import * as yup from "yup";

export const stockFormValidations = (onSubmit, items) => () => {
  //validation schema
  const validationSchema = yup.object({
    itemCode: yup
      .string()
      .required("requried")
      .test("check item code", "This code is already exists !", (values) => {
        //this validation block the user to type exisiting item code again
        const codeAvailability = items.some((item) => item.itemCode === values);

        if (codeAvailability) return false;
        return true;
      })
      .max(60, "Maximum character size is 60"),

    itemName: yup
      .string()
      .required("requried")
      .test("check item name", "This name is already exists", (values) => {
        const x = 123;
        //this validation block the user to type exisiting item name again
        const nameAvailability = items.some((item) => item.itemName === values);

        if (nameAvailability) return false;
        return true;
      })
      .max(60, "Maximum character size is 60"),

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
