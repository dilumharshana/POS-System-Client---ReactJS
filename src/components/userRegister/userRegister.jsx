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

import { UserAuthTemplate } from "../../pages/UserAuthTemplate/userAuthUserAuthTemplate";

export const UserRegister = () => {
  // states------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const registerUser = async () => {
    try {
      const data = await axios.post("http://localhost:2000/users/register", {
        name,
        email,
        password,
      });
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserAuthTemplate page="Login">
      <Grid container direction="column">
        <Grid>
          {/* topic-------------------- */}
          <Box item pt={2} display="flex" justifyContent="center" pt={4} pb={3}>
            <h2>Sign In</h2>
          </Box>
        </Grid>

        {/* name ------------------------------- */}
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" p={2}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
        </Grid>

        {/* email------------------------------------------ */}
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" p={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Grid>

        {/* password--------------------------------------------- */}
        <Grid>
          <Box item pt={2} display="flex" p={2}>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Grid>

        {/* retyepe password -----------------------------------*/}
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" p={2}>
            <TextField
              fullWidth
              type={showRetypePassword ? "text" : "password"}
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Retype-Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowRetypePassword(!showRetypePassword)}
                    >
                      {!showRetypePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={retypedPassword}
              onChange={(e) => setRetypedPassword(e.target.value)}
            />
          </Box>
        </Grid>

        {/* sign in button------------------------------------------- */}
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" pb={2}>
            <Button
              size="large"
              variant="contained"
              onClick={() => registerUser()}
            >
              Sign In
            </Button>
          </Box>
        </Grid>

        {/* googlr auth button ---------------------------------------- */}
        <Divider light={true} />
        <Grid>
          <Box item pt={2} display="flex" justifyContent="center" mt={2} mb={3}>
            <Button size="large" variant="contained">
              Sign In with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </UserAuthTemplate>
  );
};
