import { useState, useEffect, useRef } from "react";
import {
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//validation schema
import {
  validateName,
  validatePassword,
} from "../../../configs/systemFromValidation";

export const SystemData = (props) => {
  const nameBox = useRef();

  useEffect(() => {}, []);

  //states
  const [name, setName] = useState(null);
  const [password, setpassWord] = useState(null);
  const [type, setType] = useState(null);

  const [showPassword, setshowPassword] = useState(false);

  //error states
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPassWordError] = useState(null);
  const [typeError, setTypeError] = useState(null);

  //handele error
  const handleError = (text) => {
    let response;
    switch (text) {
      case "name":
        response = validateName(name);
        response.state === false
          ? setNameError(response.text)
          : setNameError(null);
      case "password":
        response = validatePassword(password);
        response.state === false
          ? setPassWordError(response.text)
          : setPassWordError(null);
      case "type":
        type === null ? setTypeError("Requried") : setTypeError(null);
    }
  };

  //handle submit
  const handleSubmit = () => {
    name === null || nameError
      ? setNameError(nameError ? nameError : "Required")
      : setNameError(null);
    password === null || passwordError
      ? setPassWordError(passwordError ? setPassWordError : "Required")
      : setPassWordError(null);
    type === null || typeError
      ? setTypeError(typeError ? typeError : "Required")
      : setTypeError(null);

    if (
      name &&
      password &&
      type &&
      !nameError &&
      !passwordError &&
      !typeError
    ) {
      alert("submited");
    }
  };

  return (
    <form action="">
      <Grid container direction="column">
        <Grid>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={props.close}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center" mt={3}>
            <h3>Create New System</h3>
          </Box>
        </Grid>

        {/* //system name */}

        <Grid item>
          <Box ml={3} mr={3} mt={4}>
            <TextField
              inputRef={nameBox}
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleError("name")}
              onKeyUp={() => handleError("name")}
              fullWidth
              label="System Name"
              error={nameError}
              helperText={nameError}
            />
          </Box>
        </Grid>

        {/* //system password */}

        <Grid item>
          <Box ml={3} mr={3} mt={3}>
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassWord(e.target.value)}
              onBlur={() => handleError("password")}
              onKeyUp={() => handleError("password")}
              fullWidth
              label="Password"
              error={passwordError}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setshowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>

        {/* //system type */}
        <Grid item>
          <Box ml={3} mr={3} display="flex" justifyContent="center" mt={3}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              name="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                handleError(e);
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              error={typeError}
              helperText={typeError}
            >
              <MenuItem value="Grocery">Grocery</MenuItem>
              <MenuItem value="Hotel / Restuarnat">Hotel / Restuarnat</MenuItem>
              <MenuItem value="Phamacy">Phamacy</MenuItem>
              <MenuItem value="Textile">Textile</MenuItem>
              <MenuItem value="Super Market"></MenuItem>
            </Select>
          </Box>
        </Grid>

        {/* //next button */}
        <Grid item>
          <Box display="flex" justifyContent="center" mt={5}>
            <IconButton
              style={{ border: "1px solid black" }}
              onClick={() => handleSubmit()}
            >
              <NavigateNextIcon color="primary" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
