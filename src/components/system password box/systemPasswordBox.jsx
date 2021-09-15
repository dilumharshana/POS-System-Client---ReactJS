import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

export const SystemPasswordBox = (props) => {
  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogTitle>
        <Box ml={5} mr={5}>
          Enter password to continue
        </Box>
      </DialogTitle>

      <form onSubmit={props.handleSubmit}>
        <DialogContent>
          <Box mb={3}>{props.dialogContent}</Box>
        </DialogContent>

        <DialogActions>{props.dialogAction}</DialogActions>
      </form>
    </Dialog>
  );
};
