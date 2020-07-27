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

const CustomisedButton = withStyles({
  root: {
    color: "white",
    "&:active": {
      border: "none",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
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
            <div className="menuButton">
              <IconButton
                color="inherit"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="flex justify-end max-w-2xl">
              <div>suraj</div>
              <div>suraj</div>
              <div>suraj</div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <DrawerComponent handleDrawerClose={() => setOpen(false)} open={open} />
    </>
  );
};

export default Header;
