import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import PropTypes from "prop-types";

const PasswordComponent = ({ id, value, onChange, showHelperText }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <InputLabel htmlFor={id}>Password</InputLabel>
      <OutlinedInput
        id={id}
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="true"
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {showHelperText && (
        <FormHelperText id={id} variant="standard">
          Minimum length should be 8
        </FormHelperText>
      )}
    </>
  );
};

PasswordComponent.defaultProps = {
  showHelperText: false,
};

PasswordComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showHelperText: PropTypes.bool,
};

export default PasswordComponent;
