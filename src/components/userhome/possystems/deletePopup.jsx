import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { IconButton, Popover, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { toast } from "react-toastify";

//component
import { SystemPasswordBox } from "../../system password box/systemPasswordBox";

//actions
import { setUserData } from "../../../state/actions/actionLoadUser/setUserData";

//form validation
import { systemPasswordHandler } from "../../../configs/systemPasswordValidation";

//axios configs
import { config } from "../../../configs/jsonConfig";

export const DeletePopup = (props) => {
  //states
  const [anchorEl, setAnchorEl] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  //delete btn pop over functions
  const handlePopDelete = (event) => setAnchorEl(event.currentTarget);
  const handlePopDeleteClose = () => setAnchorEl(false);

  //pop over box configs
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //props comming from systemList component
  const { systemID, _id } = props;

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
      //verify passwords
      await axios.post(
        "/api/possystems/authsystem",
        {
          dbName: systemID,
          password: formik.values.password,
        },
        config
      );

      //removeing system
      await axios.post(
        "api/possystems/remove",
        { systemID, _id },
        { "content-type": "Application/json" }
      );

      loadUser(); //calling redux action to reload user

      //closing password box
      closeConfirmationBox();

      toast.warn("System deleted successfully !", {
        position: "bottom-right",
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.response.data, {
        position: "bottom-right",
        theme: "colored",
        autoClose: 3000,
      });
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
            title="Enter password to delete"
            name="password"
            label="System password"
            type="password"
            open={openDialog}
            close={closeConfirmationBox}
            formik={formik}
            dialogAction={
              <>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => setOpenDialog(false)}
                >
                  CANCEL
                </Button>
                <Button variant="contained" color="secondary" type="submit">
                  DELETE
                </Button>
              </>
            }
          />
        </Popover>
      </>
    </div>
  );
};
