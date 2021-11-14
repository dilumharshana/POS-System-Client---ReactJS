import { Box, Dialog, DialogTitle, DialogActions } from "@material-ui/core";

export const ConfirmationBox = (props) => {
  const { title, open, close, dialogAction } = props;

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        <Box ml={5} mr={5}>
          {title}
        </Box>
      </DialogTitle>

      <DialogActions>{dialogAction}</DialogActions>
    </Dialog>
  );
};
