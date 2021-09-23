import { useFormik } from "formik";
import * as yup from "yup";

//validations
import * as validation from "./validationRules";

export const loginFormHandler = (onSubmit) => () => {
  //validation schema

  const validationSchema = yup.object({
    email: yup.string().required("Email required .").email("Invalid Email"),
    password: yup.string().required("Required"),
  });

  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });
};

export const registerFromHandler = (onSubmit) => () => {
  const validationSchema = yup.object({
    name: validation.nameValidation(),
    email: validation.emailValidatiion(),
    password: validation.passwordValidation(),
    repassword: validation.retypePasswordValidation(),
  });
  return useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit,
  });
};
