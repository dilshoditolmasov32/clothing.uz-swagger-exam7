import * as React from "react";
import Box from "@mui/material/Box";
import {
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import "rodal/lib/rodal.css";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { workerValidationSchema } from "../../utils/validation";
import { toast } from "react-toastify";
import { useState } from "react";
import { useMask } from "@react-input/mask";
import worker from "../../../api/worker";

const defaultTheme = createTheme();

export default function Index({ openUpdateModal, open, setOpen }) {
  const initialValues = {
    first_name: openUpdateModal?.first_name || "",
    last_name: openUpdateModal?.last_name || "",
    age: openUpdateModal?.age || "",
    email: openUpdateModal?.email || "",
    gender: openUpdateModal?.gender || "female",
    phone_number: openUpdateModal?.phone_number || "",
  };

  const inputRef = useMask({
    mask: "998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    // const phoneNumber = values.phone_number.replace(/\D/g, "");
    // const newValues = { ...values, phone_number: `${phoneNumber}` };
    console.log(values);
    try {
      const response = await worker.update(values); 
      if (response.status === 200 || response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
    }
    setSubmitting(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
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
              maxHeight: "90vh",
              width: "400px",
              overflowY: "auto",
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={workerValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="first_name"
                    type="text"
                    as={TextField}
                    label="First Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="first_name"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />
                  <Field
                    name="last_name"
                    type="text"
                    as={TextField}
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="last_name"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />
                  <Field
                    name="age"
                    type="number"
                    as={TextField}
                    label="Age"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="age"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />
                  <Field
                    name="email"
                    type="email"
                    label="Email address"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    }
                  />
                  <FormLabel
                    id="demo-controlled-radio-buttons-group"
                    sx={{ fontSize: "18px", paddingLeft: "12px" }}
                  >
                    Gender
                  </FormLabel>
                  <Field name="gender" as={RadioGroup}>
                    <div className="flex justify-between">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        name="gender"
                        margin="normal"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        name="gender"
                        margin="normal"
                      />
                    </div>
                  </Field>
                  <Field
                    name="phone_number"
                    as={TextField}
                    type="text"
                    label="Phone number"
                    fullWidth
                    variant="outlined"
                    inputRef={inputRef}
                    margin="normal"
                    helperText={
                      <ErrorMessage
                        name="phone_number"
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
