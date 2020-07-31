import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormHelperText,
  Typography,
  FormControl,
} from "@material-ui/core";
import PasswordComponent from "./Core/PasswordComponent";
import { showSnackBar } from "../reducers/snackBarSlice";
import { useDispatch } from "react-redux";
import { validateEmail, overrideComponentStyles } from "../helpers";
import { handleSignUpService } from "../services/signUpService";

const ModifiedRButton = overrideComponentStyles(Button, {
  root: {
    marginRight: "1rem",
  },
});

const ModifiedLButton = overrideComponentStyles(Button, {
  root: {
    marginLeft: "1rem",
  },
});

const CFormControl = overrideComponentStyles(FormControl, {
  root: {
    marginBottom: "1.25rem",
  },
});

const SignUpForm = () => {
  const initialState = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    phoneNumber: "",
    showPassword: false,
  };
  const dispatch = useDispatch();
  const [values, setValues] = useState({ ...initialState });
  const [canFormSave, setCanFormSave] = useState(false);

  const handleChange = (prop) => (event) => {
    if (prop !== "showPassword") {
      setValues({ ...values, [prop]: event.target.value });
    } else {
      setValues({ ...values, [prop]: !values.showPassword });
    }
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

  const handleClear = () => {
    dispatch(
      showSnackBar({
        open: true,
        message: "User Successfully created",
      })
    );
    // setValues({ ...initialState });
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
      // setOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="mb-5">
          <Typography variant="h5" gutterBottom>
            SignUp
          </Typography>
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            className="inputField  w-full"
            value={values.username}
            onChange={handleChange("username")}
          />
        </div>
        <CFormControl variant="outlined" error={validatePassword(values)}>
          <PasswordComponent
            id="signup-password"
            value={values.password}
            onChange={handleChange("password")}
            showHelperText={true}
          />
        </CFormControl>
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
    </>
  );
};

export default SignUpForm;
