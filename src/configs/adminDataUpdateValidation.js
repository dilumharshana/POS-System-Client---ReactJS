import { useFormik } from "formik";
import * as yup from "yup";
import * as validation from "./validationRules";

export const validateName = (name, onSubmit) => () => {
  const validationSchema = yup.object({
    name: validation.nameValidation(),
  });

  return useFormik({
    initialValues: {
      name: name,
    },
    validationSchema,
    onSubmit,
  });
};

export const validateAdminPassword = (onSubmit) => () => {
  const validationSchema = yup.object({
    oldPassword: yup.string().required("Requried"),
    password: validation.passwordValidation(),
    retypePassword: validation.retypePasswordValidation(),
  });
  return useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      retypePassword: "",
    },
    onSubmit,
    validationSchema,
  });
};
