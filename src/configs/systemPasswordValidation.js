import { useFormik } from "formik";
import * as yup from "yup";

export const systemPasswordHandler = (onSubmit) => () => {
  const validationSchema = yup.object({
    password: yup.string().required("Incorrect Password "),
  });

  return useFormik({
    initialValues: {
      password: "",
    },
    validationSchema,
    onSubmit,
  });
};