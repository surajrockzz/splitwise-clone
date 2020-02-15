import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    TextField,
    Grid, Button, Dialog, DialogTitle, IconButton,
    Typography, DialogContent, DialogActions, Chip, MenuItem, Input, Select
} from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { green, orange } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import FaceIcon from '@material-ui/icons/Face';
import classNames from 'classnames';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    btnGreen: {
        color: 'white',
        backgroundColor: green[300]
    },
    btnOrange: {
        color: 'white',
        backgroundColor: orange[500]
    },
    btn: {
        fontWeight: 700,
        marginTop: '3%',
        marginRight: '1%'
    }
});

/**
 * make it asynchronous calls refer https://material-ui.com/components/autocomplete/
 */
const InputWithChips = () => {
    let top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    ];

    return (
        <Autocomplete
            id="combo-box-demo"
            multiple
            filterSelectedOptions={true}
            options={top100Films}
            getOptionLabel={option => option.title}
            style={{ width: '100%' }}
            renderInput={params => (
                <TextField {...params} fullWidth />
            )}
            renderTags={(options, getTagProps) => {
                return options.map((option, index) => <Chip icon={<FaceIcon />} label={option.title} variant="outlined" {...getTagProps({ index })} />)
            }}
        />
    )
}

const StaticDatePickerModal = () => {
    const [date, changeDate] = useState(new Date());
    const [calenderVisible, setcalenderVisible] = useState(false);
    const handleCalenderVisible = () => {
        setcalenderVisible(!calenderVisible);
    }
    const handleDateChange = (selectedDate) => {
        console.log(selectedDate);
        changeDate(selectedDate);
        setcalenderVisible(!calenderVisible);
    }

    return (<>
        <Chip icon={<FaceIcon />} label="choose date" variant="outlined" onClick={handleCalenderVisible} />
        <Dialog onClose={handleCalenderVisible} aria-labelledby="customized-dialog-title" open={calenderVisible}>
            <CustomisedDialogTitle id="simple-dialog-title" onClose={handleCalenderVisible}>
                Choose Date
            </CustomisedDialogTitle>
            <DialogContent dividers>
                <DatePicker
                    autoOk
                    orientation="portrait"
                    variant="static"
                    openTo="date"
                    value={date}
                    onChange={handleDateChange}
                />
            </DialogContent>
        </Dialog>
    </>)
}

const CustomisedDialogTitle = (props) => {
    const { children, onClose } = props;
    return (<>
        <DialogTitle disableTypography >
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    </>)
}
const DashBoardHeader = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickopen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={6}>
                    <h2>Dashboard</h2>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" className={classNames(classes.btnOrange, classes.btn)} onClick={handleClickopen}>Add Expense</Button>
                    <Button variant="contained" className={classNames(classes.btnGreen, classes.btn)}>Settle up</Button>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <CustomisedDialogTitle id="simple-dialog-title" onClose={handleClose}>
                            Add Expense
                        </CustomisedDialogTitle>
                        <DialogContent dividers>
                            <InputWithChips />
                        </DialogContent>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            </Typography>
                            <Typography gutterBottom>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </Typography>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <StaticDatePickerModal />
                            </MuiPickersUtilsProvider>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button autoFocus className={classes.btnOrange} variant="contained">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoardHeader;