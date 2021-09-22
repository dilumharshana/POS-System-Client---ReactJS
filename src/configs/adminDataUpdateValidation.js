import { useFormik } from "formik";
import * as yup from "yup";

export const validateName = (name, onSubmit) => () => {
  console.log("function");
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Canot be empty")
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
  });

  return useFormik({
    initialValues: {
      name: name,
    },
    validationSchema,
    onSubmit,
  });
};
