import { useFormik } from "formik";
import * as yup from "yup";

export const formHandler = (submit) => () => {
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email required ."),
    password: yup.string().required("password required"),
  });

  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });
};
