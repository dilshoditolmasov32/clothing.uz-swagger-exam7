import * as Yup from "yup";

//==============   AUTH   =================

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid required").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/,
      "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character"
    )
    .required("Password is required"),
});

//==============   CATEGORY   =================

export const categoryValidationSchema = Yup.object({
  category_name: Yup.string().required("Kategoriya nomini yozing"),
});

//==============   WORKER   =================

export const workerValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Jinsingizni belgilang"),
  email: Yup.string().email("Invalid required").required("Email is required"),
  age: Yup.string().required("Yoshingizni kiriting"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/,
      "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character"
    )
    .required("Password is required"),
  phone_number: Yup.string()
    .min(18, "Invalid phone number")
    .required("Phone is required"),
});

//==============   PRODUCT   =================

export const productValidationSchema = Yup.object().shape({
  age_max: Yup.number()
    .typeError("Age max must be a number")
    .required("Age max is required"),
  age_min: Yup.number()
    .typeError("Age min must be a number")
    .required("Age min is required"),
  cost: Yup.number()
    .typeError("Cost must be a number")
    .required("Cost is required"),
  count: Yup.number()
    .typeError("Count must be a number")
    .required("Count is required"),
  color: Yup.string().required("Color is required"),
  discount: Yup.string().required("Discount is required"),
  for_gender: Yup.string().required("Gender is required"),
  description: Yup.string().required("Description is required"),
  made_in: Yup.string().required("Made in is required"),
  product_name: Yup.string().required("Product name is required"),
  size: Yup.string()
    .matches(/^(S|M|L|XL|XXL)$/, "Size must be one of S, M, L, XL, XXL")
    .required("Size is required"),
});
