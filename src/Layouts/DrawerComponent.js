import React, { memo } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import {
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ListItem from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import { firstSection, secondSection } from "../Routes/routes";

const drawerWidth = 250;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const CListItem = withStyles({
  root: {
    display: "inline-flex",
    alignItems: "center",
  },
})(ListItem);

const CListItemIcon = withStyles({
  root: {
    paddingLeft: "1rem",
  },
})(ListItemIcon);

const DrawerComponent = ({ handleDrawerClose, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          {"ltr" === "trr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {firstSection.map((button, index) => (
          <Link to={button.path} key={index}>
            <CListItem key={button.name}>
              <CListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </CListItemIcon>
              <ListItemText primary={button.name} />
            </CListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {secondSection.map((button, index) => (
          <Link to={button.path} className="block" key={index}>
            <CListItem key={button.name}>
              <CListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </CListItemIcon>
              <ListItemText primary={button.name} />
            </CListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(DrawerComponent);
