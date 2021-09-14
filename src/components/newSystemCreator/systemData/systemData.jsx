import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  TextField,
  Select,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

//validation schema
import {
  validateName,
  validatePassword,
} from "../../../configs/systemFromValidation";

export const SystemData = (props) => {
  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  const typeInput = useRef(null);

  const systemSet = useSelector((store) => store.currentUser.possystems);

  const availableSystems =
    systemSet && systemSet.length > 0
      ? systemSet.map((system) => system.name)
      : [];

  const [showPassword, setshowPassword] = useState(false);

  //error states
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPassWordError] = useState(null);
  const [typeError, setTypeError] = useState(null);

  //handele error
  const handleError = (ref) => {
    let response;
    switch (ref.current.name) {
      case "name":
        response = validateName(nameInput.current.value, availableSystems);
        response.state === false
          ? setNameError(response.text)
          : setNameError(null);
        break;
      case "password":
        response = validatePassword(passwordInput.current.value);
        response.state === false
          ? setPassWordError(response.text)
          : setPassWordError(null);
        break;
      case "type":
        props.type === null ? setTypeError("Requried") : setTypeError(null);
        break;
    }
  };

  //handle submit
  const handleSubmit = () => {
    handleError(nameInput);
    handleError(passwordInput);
    handleError(typeInput);

    if (
      props.name &&
      props.password &&
      props.type &&
      !nameError &&
      !passwordError &&
      !typeError
    ) {
      props.changePage();
    }
  };

  return (
    <form action="">
      <Grid container direction="column">
        {/* //close button */}

        <Grid>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={props.close}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
        </Grid>

        {/* //heading */}
        <Grid item>
          <Box display="flex" justifyContent="center" mt={3}>
            <h3>Create New System</h3>
          </Box>
        </Grid>

        {/* //system name */}

        <Grid item>
          <Box ml={3} mr={3} mt={4}>
            <TextField
              inputRef={nameInput}
              name="name"
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              onBlur={() => handleError(nameInput)}
              onKeyUp={(e) => handleError(nameInput)}
              fullWidth
              label="System Name"
              error={nameError}
              helperText={nameError}
              InputProps={
                props.name
                  ? {
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box mr={2}>
                            {nameError || props.name.length < 2 ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <CheckCircleIcon style={{ color: "#3bb802" }} />
                            )}
                          </Box>
                        </InputAdornment>
                      ),
                    }
                  : null
              }
            />
          </Box>
        </Grid>

        {/* //system password */}

        <Grid item>
          <Box ml={3} mr={3} mt={3}>
            <TextField
              name="password"
              inputRef={passwordInput}
              type={showPassword ? "text" : "password"}
              value={props.password}
              onChange={(e) => props.setpassWord(e.target.value)}
              onBlur={() => handleError(passwordInput)}
              onKeyUp={() => handleError(passwordInput)}
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
          <Box
            ml={3}
            mr={3}
            display="flex"
            justifyContent="center"
            mt={3}
            id="hh"
          >
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              native
              inputProps={{
                name: "type",
                inputRef: typeInput,
              }}
              value={props.type}
              onChange={(e) => {
                props.setType(e.target.value);
                handleError(typeInput);
              }}
              onClose={() => handleError(typeInput)}
              style={{ minWidth: "200px" }}
              error={typeError}
              value={props.type}
            >
              <option value="Grocery">Grocery</option>
              <option value="Hotel / Restuarnat">Hotel / Restuarnat</option>
              <option value="Phamacy">Phamacy</option>
              <option value="Textile">Textile</option>
              <option value="Super Market">Super Market</option>
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
