import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackBar } from "../reducers/snackBarSlice";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const CustomSnackBar = () => {
  const { anchorOrigin, autoHideDuration, open, message } = useSelector(
    (state) => state.snackbar
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeSnackBar({ open: false }));
  };
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={handleClose}
      message={message}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default CustomSnackBar;
