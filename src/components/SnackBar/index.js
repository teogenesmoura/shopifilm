import React, {useState} from 'react'
import { Snackbar, Typography } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import {MAX_MOVIES_ERROR} from './../../errors'

export default function SnackBar(props) {

  const handleSnackbarClose = (event, reason) => {
    if (reason == 'clickaway') {
      return;
    }
    props.setSnackBarOpen(false)
  }

  return (
    <Snackbar open={props.snackBarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
      <MuiAlert id="snackbar-alert" elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
        <Typography variant="h4">{MAX_MOVIES_ERROR}</Typography>
      </MuiAlert>
    </Snackbar>
  )
}
