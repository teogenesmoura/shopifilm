import React, {useState} from 'react'
import { Grid, Card, CardContent, Typography, Button, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

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
    const [enabled, setEnabled] = useState(true)
    const movieInNominatedList = props.nominationList.includes(props.movie)

    function addMovieToNominationList() {
      setEnabled(false)
      props.addMovieToNominationList(props.movie)
    }

    return (
      <Grid container className={classes.row}>
        <Grid item xs={6}>
          <Typography className={classes.movieTitle}>
            {props.movie.Title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.movieYear}>
            {props.movie.Year}
          </Typography>
        </Grid>
        <Grid item xs={3}>
        <Button color="primary"
                id="nominateMovieButton"
                variant={movieInNominatedList ?  "disabled" : "outlined"}
                onClick={addMovieToNominationList}>Nominate movie</Button>
        </Grid>
        <Divider />
      </Grid>
    )
}

export default function MoviesList(props) {
  let searchResult = props.searchResult
  const classes = useStyles()

  return (
    <Grid container className={classes.body}>
      <Card className={classes.card}>
        <CardContent>
        {searchResult ? searchResult.map(function(movie, position) {
          return <MovieRow movie={movie}
                           key={position}
                           addMovieToNominationList={props.addMovieToNominationList}
                           nominationList={props.nominationList}/>
        }): ''}
        </CardContent>
      </Card>
    </Grid>
  )
}
