import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { IconButton, Popover, Button, TextField } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";

//component
import { SystemPasswordBox } from "../../system password box/systemPasswordBox";

//actions
import { setUserData } from "../../../state/actions/actionLoadUser/setUserData";

//form validation
import { systemPasswordHandler } from "../../../configs/systemPasswordValidation";

export const DeletePopup = (props) => {
  //states
  const [anchorEl, setAnchorEl] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const password = useRef("");

  //delete btn pop over functions
  const handlePopDelete = (event) => setAnchorEl(event.currentTarget);
  const handlePopDeleteClose = () => setAnchorEl(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { systemID, _id, systemPassword } = props;

  const loadUser = bindActionCreators(setUserData, useDispatch());

  //open dialog box
  const openConfirmationBox = () => setOpenDialog(true);

  //closing doalog box
  const closeConfirmationBox = () => {
    setOpenDialog(false);
    handlePopDeleteClose();
  };

  const deleteSystem = async () => {
    try {
      if (!(await bcryptjs.compare(password, systemPassword)))
        return toast.error("Incorrect Password", { position: "bottom-center" });

      const response = await axios.post(
        "http://localhost:2001/api/possystems/remove",
        { systemID, password, _id },
        { "content-type": "Application/json" }
      );

      loadUser();
      closeConfirmationBox();
      toast.warn("System deleted successfully !", {
        position: "bottom-left",
      });
    } catch (error) {
      toast.error(error.response.data, { position: "bottom-left" });
    }
  };

  const useFormik = systemPasswordHandler(deleteSystem);
  const formik = useFormik();

  return (
    <div>
      <>
        <IconButton aria-describedBy={id} onClick={handlePopDelete}>
          <MoreVertIcon />
        </IconButton>

        {/* //main popup box */}

        <Popover
          id={id}
          open={open}
          onClose={closeConfirmationBox}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Button
            startIcon={<DeleteIcon />}
            color="secondary"
            variant="contained"
            onClick={openConfirmationBox}
          >
            Delete
          </Button>

          {/* //confirmation dialog box */}

          <SystemPasswordBox
            dialogContent={
              <TextField
                inputRef={password}
                name="password"
                label="System password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autofocus
                fullWidth
              />
            }
            dialogAction={
              <>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => setOpenDialog(false)}
                >
                  CANCEL
                </Button>
                <Button type="submit" variant="contained" color="secondary">
                  DELETE
                </Button>
              </>
            }
            open={openDialog}
            close={closeConfirmationBox}
            onSubmit={formik.handleSubmit}
          />
        </Popover>
      </>
    </div>
  );
};
