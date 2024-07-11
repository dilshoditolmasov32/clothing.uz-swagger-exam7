import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { auth } from "../../api";
import { signInValidationSchema } from "../../components/utils/validation";

export default function LoginView() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "xasannosirov094@gmail.com",
    password: "Sehtols@01",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        localStorage.setItem("email", response?.data?.email)
        localStorage.setItem("access_token", response?.data?.access_token);
        navigate("/main");
        toast.success("Xush kelibsiz");
      }
    } catch (error) {
      toast.error("Email yoki parol xato, qaytadan urinib ko'ring");
    }
    setSubmitting(false);
  };

  const renderForm = (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={3}>
              <Field
                name="email"
                type="email"
                label="Email address"
                as={TextField}
                variant="outlined"
                
                helperText={
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-[red] text-[15px]"
                  />
                }

              />

              <Field
                name="password"
                label="Password"
               
                
                as={TextField}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                helperText={
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-[red] text-[15px]"
                  />
                }

                
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ my: 3 }}
            >
              <Link variant="subtitle2" underline="hover" sx={{fontWeight:"bold"}}>
                Forgot password?
              </Link>
            </Stack>

            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ fontWeight: "600", fontFamily: "Roboto",  color:"white", paddingY:"12px" , hover:"none"  }}
            >
              {isSubmitting ? "Yuklanmoqda..." : "Tizimga kirish"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );

  return (
    <Box  sx={{paddingTop:"10px"}}  >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" className="text-black text-2xl " sx={{fontWeight:"bold"}}>Sign in to Minimal</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }} >
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5, color:"blue" }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16), padding:"15px", color:"red", fontSize:"16px" }}
            >
              <FaGoogle />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16), color:"#1877F2" , fontSize:"16px"} }
            >
              <FaFacebookF />

            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16), color:"#1C9CEA", fontSize:"16px" }}
            >
              <FaTwitter />

            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
