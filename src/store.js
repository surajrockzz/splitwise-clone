import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./reducers/snackBarSlice";

export default configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});
