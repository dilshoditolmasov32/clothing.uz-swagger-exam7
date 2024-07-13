import * as React from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { categoryValidationSchema } from "../../utils/validation";
import categoreis from "../../../api/categoreis";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function Index({ open, setOpen, updateData }) {
  console.log(updateData)

  const initialValues = {
    category_name: updateData?.category_name || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    if (updateData) {
      const payload = {
        category_id: updateData?.category_id,
        ...values,
      };

      try {
        const response = await categoreis.update(payload);
        if (response.status === 200 || response.status === 201) {
          toast.success("Ma'lumot muvaqqiyatli uzgartirildi");
          setOpen(false); 
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        setOpen(false)
        toast.error(error.message)
      }
    } else {
      try {
        const response = await categoreis.create(values);
        if (response.status === 200 || response.status === 201) {
          setOpen(false); 
          toast.success("Yangi kategoriya qo'shildi");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper",
              padding: 4,
              borderRadius: 1,
              boxShadow: 24,
            }}
          >
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
              Buyurtma ma‘lumotlari
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={categoryValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="category_name"
                    type="text"
                    as={TextField}
                    label="Kategoriya nomi"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="category_name"
                        component="p"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    sx={{ mt: 2, paddingY: "10px" }}
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
