import { useFormik } from "formik";
import * as yup from "yup";

export const formHandler = (submit) => () => {
  //validation schema
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .test("chekName", "Invalid name", function () {
        if (
          /(?=.*?[0-9])/.test(this.parent.name) ||
          /(?=.*?[#?!@$%^&*-/_(){}.=\:;|<>`])/.test(this.parent.name)
        ) {
          return false;
        }
        return true;
      })
      .min(3, "Name must be atleast 3 charectors !")
      .max(25, "Name should be less than 25 charecters"),
    email: yup.string().required("Email required .").email("Invalid Email"),
    password: yup
      .string()
      .required("password required")
      .matches(/(?=.*?[A-Z])/, "Required atleast one Upercase letter ")
      .matches(/(?=.*?[a-z])/, "Required atleast one Lowercase Letter")
      .matches(/(?=.*?[0-9])/, "Required atleast on digit")
      .matches(
        /(?=.*?[#?!@$%^&*-_(){}.`])/,
        "Required atleast one special chareactor"
      ),
    repassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    passwordLogin: yup.string().required("Required"),
  });

  return useFormik({
    initialValues: {
      name: "dasd",
      email: "",
      password: "",
      repassword: "asd",
      passwordLogin: "sadsad",
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });
};
