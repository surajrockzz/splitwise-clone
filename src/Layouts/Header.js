import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem } from '@material-ui/core'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    orangeAvatar: {
        color: '#fff',
        backgroundColor: "#4fc3f7",
        margin: "1%"
    }
})
const Header = props => {
    const materialStyles = useStyles();
    const styles = {
        button: {
            padding: "1%"
        },
        heading: {
            paddingRight: "75%",
            paddingLeft: "2%"
        },
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" style={styles.heading}>
                    Splitwise
            </Typography>
                <Button color="inherit" style = {styles.button}>Login</Button>
            <Button color="inherit" style = {styles.button}>SignUp</Button>
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
        </AppBar>)
}

export default Header;

