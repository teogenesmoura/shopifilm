import React, {useState} from 'react'
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    padding: '0 1rem',
    display: 'flex',
    overflow: 'auto'
  },
  row: {
    padding: '1rem 0',
  },
  movieTitle: {
    color: 'black'
  },
  movieYear: {
    color: 'black'
  },
  card: {
    width: '100%',
    height: '40vh',
    overflow: 'auto'
  }
}))

function MovieRow(props) {
  const classes = useStyles()
  return (
    <Grid container className={classes.row}>
      <Grid item xs={6}>
      <Typography className={classes.movieTitle}> {props.movie.Title} </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined"
                id="removeButton"
                onClick={(e) => { props.removeFromNominationList(props.movie) }}
                className={classes.movieTitle}>Remove</Button>
      </Grid>
    </Grid>
  )
}

export default function NominationList(props) {
    const classes = useStyles()

    return (
      <>
        <Grid container className={classes.body}>
          <Card className={classes.card}>
            <CardContent>
              { props.nominationList ? props.nominationList.map(function(movie, position) {
                return <MovieRow movie={movie} removeFromNominationList={props.removeFromNominationList} key={position} />
              }) : ''}
            </CardContent>
          </Card>
        </Grid>
      </>
    )
}
