import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection:'column'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
        <div className="request-room-id-data">
              <TextField id="outlined-basic" label="Room Name or ID" variant="outlined" />
          </div>
          <div className='request-date-data mt-4'>
              <Datetime />
          </div>
    </form>
  );
}
