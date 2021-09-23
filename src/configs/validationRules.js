import * as yup from "yup";

//name
export const nameValidation = () =>
  yup
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
    .max(25, "Name must be less than 25 characters");

//password
export const passwordValidation = () =>
  yup
    .string()
    .required("Required")
    .matches(/(?=.*?[a-z])/, "Should include atleast on lowercase character")
    .matches(/(?=.*?[A-Z])/, "Should include atleast one uppercase character")
    .matches(/(?=.*?[0-9])/, "Should include atleast one number")
    .matches(
      /[?=.*?[#?!@$%^&*-/_(){}.=\:;|<>`]/,
      "Should include atleast one special charactor"
    );

//retype password
export const retypePasswordValidation = () =>
  yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password")], "Passwords not match");

//email
export const emailValidatiion = () =>
  yup.string().required("Required").email("Invalid email address");
