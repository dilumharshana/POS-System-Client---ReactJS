import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

export const SystemPasswordBox = (props) => {
  const { title, name, label, open, close, formik, dialogAction } = props;

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        <Box ml={5} mr={5}>
          {title}
        </Box>
      </DialogTitle>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box mb={3}>
            {" "}
            <TextField
              name={name}
              label={label}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              autofocus
              fullWidth
            />
          </Box>
        </DialogContent>

        <DialogActions>{dialogAction}</DialogActions>
      </form>
    </Dialog>
  );
};
