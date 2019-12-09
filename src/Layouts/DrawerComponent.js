import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider, List, Button } from '@material-ui/core';
import ListItem from '@material-ui/core/List';
import ListItemIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';
import {firstSection, secondSection} from '../Routes/routes'

const drawerWidth = 200 ;
const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'left',
        padding: "0 1px",
        justifyContent: 'flex-end',
    },
});
// buttons are not working in menu 
// and fix css issuess in DrawerCompoennt
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
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {'ltr' === 'trr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {firstSection.map((button) => (
                    <ListItem key={button.name}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <Link to={button.path}><Button>{button.name}</Button></Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {secondSection.map((button) => (
                    <ListItem key={button.name}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <Link to={button.path}><Button>{button.name}</Button></Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default memo(DrawerComponent);