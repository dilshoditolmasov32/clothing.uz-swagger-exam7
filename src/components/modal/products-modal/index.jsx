import * as React from "react";
import { useState, useEffect } from "react";
import { RadioGroup } from "formik-material-ui";

import {
  Box,
  MenuItem,
  Modal,
  Select,
  Button,
  Container,
  TextField,
  CssBaseline,
  createTheme,
  ThemeProvider,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {productValidationSchema} from '../../utils/validation'
import { toast } from "react-toastify";
import product from "../../../api/product";
import categoreis from "../../../api/categoreis";

const defaultTheme = createTheme();

export default function ServiceModal({ open, setOpen, update }) {
  const [data, setData] = useState([]);

  const initialValues = {
    age_max: "",
    age_min: "",
    category_id: "",
    color: "",
    cost: "",
    count: "",
    description: "",
    discount: "",
    made_in: "",
    for_gender: "",
    product_name: "",
    size: "",
  };

  const getData = async () => {
    try {
      const response = await categoreis.get();
      if (response.status === 200 && response?.data?.categories) {
        setData(response?.data?.categories);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
      const payload = {
        ...values,
        color: values.color.split(",").map((color) => color.trim()),
        size: values.size.split(",").map((size) => size.trim())
      };

    try {
      const result = await product.create(payload);
      if (result.status===201) {
        toast.success("Ma'lumot muvaqqiyati yaratildi");
        setOpen(false)
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setOpen(false)
      toast.error(error.message);
    }

    setSubmitting(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper",
              padding: 4,
              margin: 4,
              borderRadius: 1,
              boxShadow: 24,
              height: "90vh",
              overflowY: "auto",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={productValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex justify-around gap-2 ">
                    <Field
                      name="age_max"
                      type="number"
                      as={TextField}
                      label="Age Maximal"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      helperText={
                        <ErrorMessage
                          name="age_max"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />

                    <Field
                      name="age_min"
                      type="number"
                      as={TextField}
                      label="Age Minimal"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      helperText={
                        <ErrorMessage
                          name="age_min"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />
                  </div>

                  <div className="flex justify-around gap-2">
                    <Field
                      name="cost"
                      type="number"
                      as={TextField}
                      label="Cost"
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="cost"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />
                    <Field
                      name="count"
                      type="number"
                      as={TextField}
                      label="Count"
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="count"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />
                  </div>

                  <div className="flex justify-around gap-2">
                    <Field
                      name="discount"
                      type="number"
                      as={TextField}
                      label="Discount"
                      margin="normal"
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="discount"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />
                    <Field
                      name="color"
                      type="text"
                      as={TextField}
                      label="Color "
                      margin="normal"
                      variant="outlined"
                      helperText={
                        <ErrorMessage
                          name="color"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    />
                  </div>

                  <div className="flex">
                    <Field
                      name="category_id"
                      as={Select}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      helperText={
                        <ErrorMessage
                          name="category_id"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      }
                    >
                      {data?.map((item) => (
                        <MenuItem  key={item.id} value={item.category_id}>
                          {item.category_name}
                        </MenuItem>
                      ))}
                    </Field>
                  </div>

                  <Field component={RadioGroup} name="for_gender"  margin="normal">
                    <FormControlLabel
                      value="male"
                      control={<Radio disabled={isSubmitting} />}
                      label="Male"
                      margin="normal"
                      disabled={isSubmitting}
                      sx={{marginTop:"20px"}}
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio disabled={isSubmitting} />}
                      label="Female"
                      margin="normal"
                      disabled={isSubmitting}
                    />
                  </Field>
                  <Field
                    name="product_name"
                    type="text"
                    label="Product Name"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="product_name"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />

                  <Field
                    name="size"
                    type="text"
                    as={TextField}
                    label="Size"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    helperText={
                      <ErrorMessage
                        name="size"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />

                  <Field
                    name="made_in"
                    as={TextField}
                    type="text"
                    label="Country  "
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="made_in"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />

                  <Field
                    name="description"
                    as={TextField}
                    type="text"
                    label="Description"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="description"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    sx={{ mt: 2, py: "10px" }}
                  >
                    {isSubmitting ? "Yuklanmoqda..." : "Saqlash"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
    </Modal>
  );
}
