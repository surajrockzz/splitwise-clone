import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { AuthContext } from "../App";

const useStyles = makeStyles({
  orangeAvatar: {
    color: "#fff",
    backgroundColor: "#4fc3f7",
    margin: "1%",
  },
});

const CButton = withStyles({
  root: {
    color: "white",
    "&:active": {
      border: "none",
    },
    "&:focus": {
      outline: "none"
    },
  },
})(Button);

const Header = (props) => {
  const materialStyles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (isAuthenticated) {
      let browserStorage = window.localStorage;
      browserStorage.removeItem("x-auth-token");
      setisAuthenticated(false);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Splitwise</Typography>
            <div className="inline-flex ml-auto items-center">
              {!isAuthenticated && (
                <>
                  <Link to="/login">
                    <CButton>Login</CButton>
                  </Link>
                  <Link to="/signup">
                    <CButton>SignUp</CButton>
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Button
                    color="inherit"
                    aria-controls="settings-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <Avatar className={materialStyles.orangeAvatar}>SJ</Avatar>
                  </Button>
                  <Menu
                    id="settings-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Your Account</MenuItem>
                    <MenuItem onClick={handleClose}>Create a Group</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <DrawerComponent handleDrawerClose={() => setOpen(false)} open={open} />
    </>
  );
};

export default Header;
