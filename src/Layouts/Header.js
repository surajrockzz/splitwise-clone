import React, {useContext} from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import clsx from 'clsx';
import {AuthContext} from '../App';


const useStyles = makeStyles({
    orangeAvatar: {
        color: '#fff',
        backgroundColor: "#4fc3f7",
        margin: "1%"
    }
});

const Header = props => {
    const styles = {
        button: {
            padding: "1%",
        },
        heading: {
            paddingRight: "73%",
            paddingLeft: "2%"
        },
    }
    const materialStyles = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
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

    const handleLogout = () => {
        if(isAuthenticated) {
            let browserStorage = window.localStorage;
            browserStorage.removeItem('x-auth-token');
            setisAuthenticated(false);
        }
        setAnchorEl(null);
    }

    return (
        <>
        <div>
        <AppBar position="static">
            <Toolbar>
                <div className='menuButton'>
                <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                </div>
                <Typography variant="h5" style={styles.heading}>
                    Splitwise
                </Typography>
                {!isAuthenticated && <>
                <div className="loginButtons d-flex">
                <Link to='/login'><Button color="inherit" style={styles.button}>Login</Button></Link>
                <Link to='/signup'><Button color="inherit" style={styles.button}>SignUp</Button></Link>
                </div>
                </>
                }
                {isAuthenticated && <>
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
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                </>
                }
            </Toolbar>
        </AppBar>
        </div>
        <DrawerComponent handleDrawerClose = {() => setOpen(false)} open = {open}/>
        </>
        )
}

export default Header;

