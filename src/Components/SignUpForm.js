import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button, FormHelperText, Snackbar } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { validateEmail } from "../helpers";
import { handleSignUpService } from "../services/signUpService";

const ModifiedRButton = withStyles({
  root: {
    marginRight: "1rem",
  },
})(Button);

const ModifiedLButton = withStyles({
  root: {
    marginLeft: "1rem",
  },
})(Button);

const SignUpForm = () => {
  const initialState = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const [values, setValues] = useState({ ...initialState });
  const [canFormSave, setCanFormSave] = useState(false);
  const [open, setOpen] = useState(false); // for snackBar

  // for snackBar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    const { username, password, email, confirmPassword, phoneNumber } = values;
    let isError = false;
    if (
      username !== "" &&
      password !== "" &&
      email !== "" &&
      confirmPassword !== "" &&
      phoneNumber !== ""
    ) {
      if (password.length < 8 && password !== confirmPassword) {
        isError = true;
      }
      if (!validateEmail(email)) {
        isError = true;
      }
      if (phoneNumber.length !== 10) {
        isError = true;
      }
      setCanFormSave(!isError);
    } else {
      setCanFormSave(false);
    }
  }, [values]);

  const validatePassword = ({ password, confirmPassword }) => {
    if (password === "") return false;
    return !(password.length > 8 && password === confirmPassword);
  };

  const [redirect, setRedirect] = useState(false);

  const handleClear = () => {
    setValues({ ...initialState });
  };

  const handleSignUp = async () => {
    const { username, email, password, phoneNumber } = values;
    let response = await handleSignUpService({
      username,
      email,
      password,
      phoneNumber,
    });
    console.log(response);
    if (response?.error) {
      handleClear();
    }
    if (response?.data) {
      setOpen(true);
      // setRedirect(true);
    }
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/login" />;
    }
  };

  return (
    <>
      <div className="flex flex-col mt-6">
        {renderRedirect()}
        <div className="mb-5">
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            className="inputField  w-full"
            value={values.username}
            onChange={handleChange("username")}
          />
        </div>
        <div className="mb-5">
          <TextField
            id="password-field"
            label="Password"
            type="password"
            variant="outlined"
            className="inputField  w-full"
            value={values.password}
            onChange={handleChange("password")}
            error={validatePassword(values)}
          />
          <FormHelperText id="password-field" error={validatePassword(values)}>
            Minimum length should be 8
          </FormHelperText>
        </div>
        <div className="mb-5">
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            className="inputField  w-full"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={validatePassword(values)}
          />
        </div>
        <div className="mb-5">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            className="inputField  w-full"
            value={values.email}
            onChange={handleChange("email")}
            error={values.email !== "" && !validateEmail(values.email)}
          />
        </div>
        <div className="mb-5">
          <TextField
            aria-describedby="component-error-text"
            label="Phone Number"
            type="text"
            variant="outlined"
            className="inputField  w-full"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            error={
              values.phoneNumber !== "" && values.phoneNumber.length !== 10
            }
          />
          <FormHelperText
            id="component-error-text"
            error={
              values.phoneNumber !== "" && values.phoneNumber.length !== 10
            }
          >
            Length should be 10
          </FormHelperText>
        </div>
        <div className="flex">
          <ModifiedRButton
            className="flex-1"
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            disabled={!canFormSave}
          >
            Submit
          </ModifiedRButton>
          <ModifiedLButton
            className="flex-1"
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            Clear
          </ModifiedLButton>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message="User Successfully Created."
      />
    </>
  );
};

export default SignUpForm;
