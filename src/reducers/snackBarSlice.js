import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "snackbar",
  initialState: {
    anchorOrigin: { vertical: "top", horizontal: "right" },
    autoHideDuration: 6000,
    open: false,
    message: "",
  },
  reducers: {
    showSnackBar: (state, action) => {
      const { open, message } = action.payload;
      state.open = open;
      state.message = message;
    },
    closeSnackBar: (state, action) => {
      state.open = action.payload.open;
    },
  },
});

export const { showSnackBar, closeSnackBar } = slice.actions;

export default slice.reducer;
