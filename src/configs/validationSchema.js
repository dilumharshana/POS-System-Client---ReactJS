import { useFormik } from "formik";
import * as yup from "yup";

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
    validationSchema: validationSchema,
    onSubmit,
  });
};

export const registerFromHandler = (onSubmit) => () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .test("checkName", "Invalid Name", function () {
        if (
          /(?=.*?[0-9])/.test(this.parent.name) ||
          /(?=.*?[#?!@$%^&*-/_(){}.`])/.test(this.parent.name)
        ) {
          return false;
        }
        return true;
      })
      .min(3, "Name must contain atleast 3 characters")
      .max(25, "Name must be less than 25 characters"),
    email: yup.string().required("Required").email("Invalid email address"),
    password: yup
      .string()
      .required("Required")
      .matches(/(?=.*?[a-z])/, "Should include atleast on lowercase character")
      .matches(/(?=.*?[A-Z])/, "Should include atleast one uppercase character")
      .matches(/(?=.*?[0-9])/, "Should include atleast one number")
      .matches(
        /[?=.*?[#?!@$%^&*-/_(){}.=\:;|<>`]/,
        "Should include atleast one special charactor"
      ),
    repassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password")], "Passwords not match"),
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
