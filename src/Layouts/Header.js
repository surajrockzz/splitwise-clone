import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import DrawerComponent from './DrawerComponent';
import clsx from 'clsx';

const useStyles = makeStyles({
    orangeAvatar: {
        color: '#fff',
        backgroundColor: "#4fc3f7",
        margin: "1%"
    },
    menuButton: {
        marginRight: '5px'
    },
    hide: {
        display: 'none',
    },
});

const Header = props => {
    const styles = {
        button: {
            padding: "1%"
        },
        heading: {
            paddingRight: "73%",
            paddingLeft: "2%"
        },
    }
    const materialStyles = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(materialStyles.menuButton, open && materialStyles.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" style={styles.heading}>
                    Splitwise
                </Typography>
                <Button color="inherit" style={styles.button}>Login</Button>
                <Button color="inherit" style={styles.button}>SignUp</Button>
                <Button color="inherit" aria-controls="settings-menu" aria-haspopup="true" onClick={handleClick} style={styles.button}>
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
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        <DrawerComponent handleDrawerClose = {() => setOpen(false)} open = {open}/>
        </>
        )
}

export default Header;

