import { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";

//components
import { UserAuthTemplate } from "../../pages/UserAuthTemplate/userAuthUserAuthTemplate";

//formik form handler
import { formHandler } from "../../configs/validationSchema";

export const UserRegister = () => {
  // states------------------------
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  //registration function
  const registerUser = async () => {
    console.log("hello");
    try {
      const data = await axios.post(
        "http://localhost:2000/api/users/register",
        formik.values
      );
      console.log(formik.values);
    } catch (error) {
      console.log(error);
    }
  };

  //form state
  const useFormik = formHandler(registerUser);
  const formik = useFormik();

  return (
    <UserAuthTemplate page="Login">
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column">
          <Grid>
            {/* topic-------------------- */}
            <Box
              item
              pt={2}
              display="flex"
              justifyContent="center"
              pt={4}
              pb={3}
            >
              <h2>Sign In</h2>
            </Box>
          </Grid>

          {/* name ------------------------------- */}
          <Grid>
            <Box item pt={2} display="flex" justifyContent="center" p={2}>
              <TextField
                fullWidth
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Name"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>
          </Grid>

          {/* email------------------------------------------ */}
          <Grid>
            <Box item pt={2} display="flex" justifyContent="center" p={2}>
              <TextField
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </Grid>

          {/* password--------------------------------------------- */}
          <Grid>
            <Box item pt={2} display="flex" p={2}>
              <TextField
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPassword ? "text" : "password"}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

          {/* retyepe password -----------------------------------*/}
          <Grid>
            <Box item pt={2} display="flex" justifyContent="center" p={2}>
              <TextField
                fullWidth
                name="repassword"
                value={formik.values.repassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showRetypePassword ? "text" : "password"}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Retype-Password"
                error={
                  formik.touched.repassword && Boolean(formik.errors.repassword)
                }
                helperText={
                  formik.touched.repassword && formik.errors.repassword
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowRetypePassword(!showRetypePassword)
                        }
                      >
                        {!showRetypePassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

          {/* sign in button------------------------------------------- */}
          <Grid>
            <Box item pt={2} display="flex" justifyContent="center" pb={2}>
              <Button type="submit" size="large" variant="contained">
                Sign In
              </Button>
            </Box>
          </Grid>

          {/* googlr auth button ---------------------------------------- */}
          <Divider light={true} />
          <Grid>
            <Box
              item
              pt={2}
              display="flex"
              justifyContent="center"
              mt={2}
              mb={3}
            >
              <Button size="large" variant="contained">
                Sign In with google
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </UserAuthTemplate>
  );
};
