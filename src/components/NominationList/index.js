import React, {useState} from 'react'
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    padding: '0 3rem 0 3rem',
    display: 'flex',
    overflow: 'auto',
    maxHeight: '100vh',
  },
  header: {
    height: '20vh',
    justifyContent: 'center',
    alignItems:'center',
    display: 'flex'
  },
  headerTitle: {
    color: theme.palette.white.main,
    fontFamily: "'Lusitana', serif;",
    borderBottom: "5px white solid",
  },
  row: {
    padding: '1rem 0',
    height: '20vh',
    justifyContent: 'space-between',
  },
  movieTitle: {
    color: theme.palette.white.main,
    weight: '100',
    textAlign: 'left'
  },
  movieYear: {
    color: theme.palette.white.main,
    weight: '500',
    textAlign: 'left'
  },
  card: {
    width: '100%',
    height: '40vh',
    overflow: 'auto'
  },
  noMovies: {
    color: theme.palette.white.main,
    fontFamily: "'Lusitana', serif;",
    textAlign: 'center',
    padding: '0 2rem 0 2rem'
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

function MovieRow(props) {
  const classes = useStyles()
  return (
    <Grid container className={classes.row}>
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={12} style={{margin: '0 0 2rem 0'}}>
            <Typography variant="h3" className={classes.movieTitle}> {props.movie.Title} </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.movieYear}> {props.movie.Year} </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
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
          <Grid item xs={12} className={classes.header}>
            <Typography variant="h1" className={classes.headerTitle}> Your List </Typography>
          </Grid>
          { props.nominationList.length > 0 ? props.nominationList.map(function(movie, position) {
            return <MovieRow movie={movie} removeFromNominationList={props.removeFromNominationList} key={position} />
          }) :
          <Grid item xs={12} className={classes.centered}>
            <Typography variant="h4" className={classes.noMovies}> You haven't nominated a movie yet :( </Typography>
          </Grid>}
        </Grid>
      </>
    )
}
