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

//validation schema
import {
  validateName,
  validatePassword,
} from "../../../configs/systemFromValidation";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export const SystemData = (props) => {
  const nameBox = useRef();

  useEffect(() => {}, []);

  //states
  const [name, setName] = useState("");
  const [password, setpassWord] = useState("");
  const [type, setType] = useState(null);

  const [showPassword, setshowPassword] = useState(false);

  //error states
  const [nameError, setNameError] = useState(null);
  const [passwordError, setpassWordError] = useState(null);
  const [typeError, setTypeError] = useState(null);

  //handele error
  const handleError = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let response;
    switch (name) {
      case "name":
        response = validateName(e.target.value);
        response.state === false
          ? setNameError(response.text)
          : setNameError(null);
      case "password":
        response = validatePassword(e.target.value);
        console.log("pass");
        response.state === false
          ? setpassWordError(response.text)
          : setpassWordError(null);
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
              onBlur={(e) => handleError(e)}
              onKeyUp={(e) => handleError(e)}
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
              onBlur={(e) => handleError(e)}
              onKeyUp={(e) => handleError(e)}
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
        <Grid item>
          <Box ml={3} mr={3} display="flex" justifyContent="center" mt={3}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              error={typeError}
            >
              <MenuItem value="Grocery">Grocery</MenuItem>
              <MenuItem value="Hotel / Restuarnat">Hotel / Restuarnat</MenuItem>
              <MenuItem value="Phamacy">Phamacy</MenuItem>
              <MenuItem value="Textile">Textile</MenuItem>
              <MenuItem value="Super Market"></MenuItem>
            </Select>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center" mt={5}>
            <IconButton
              style={{ border: "1px solid black" }}
              onClick={props.changePage}
            >
              <NavigateNextIcon color="primary" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
