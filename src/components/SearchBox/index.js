import React, {useState} from 'react'
import { Button, TextField, Grid, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Top100MoviesIMDB from './../../top100MoviesIMDB'
import Prize from './../../assets/prize.svg'

const useStyles = makeStyles((theme) => ({
  body: {
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  searchTextField: {
    width: '50%',
    alignSelf: 'center',
  },
  textfield: {
    margin: '2rem 0 0 0'
  },
  input: {
    color: theme.palette.primary.main,
  },
  button: {
    margin: '1rem 0.5rem 0 0',
    textTransform: 'none'
  },
  buttonContainer: {
    margin: '2rem 0 2rem 0',
    alignSelf: 'center',
  },
  prize: {
    height: '20%',
    margin: '1rem 0 0 0'
  },
  middleBody: {
    padding: '3rem 0 0 0'
  },
  title: {
    margin: '1rem 0 0 0',
    fontWeight: '100'
  }
}))

export default function SearchBox(props) {
  const classes = useStyles()
  const [movieQuery, setMovieQuery] = useState('')

  const handleChange = (e) => {
    setMovieQuery(e.target.value)
  }

  const selectRandomFromArray = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
  }

  const handleFeelingLuckyButton = () => {
    const randomMovie= selectRandomFromArray(Top100MoviesIMDB)
    setMovieQuery(randomMovie.title)
    props.searchMoviesByName(randomMovie.title)
  }

  return (
    <Grid container className={classes.body}>
      <Grid item className={classes.header}>
        <img src={Prize} height="auto" width="240" alt="prize illustration"/>
        <Typography variant="h2" gutterBottom className={classes.title}>
          The <b>Shoppies</b>
        </Typography>
      </Grid>
      <Grid item className={classes.middleBody}>
        <TextField id="outlined-search"
                 variant="outlined"
                 label="Search for a movie"
                 color="primary"
                 InputProps={{
                   className: classes.input
                 }}
                 className={classes.searchTextField}
                 value={movieQuery}
                 onChange={handleChange}
                 type="search" />
          <div className={classes.buttonContainer}>
            <Button color="primary"
                  id="searchMovieButton"
                  className={classes.button}
                  variant="outlined"
                  data-testid="searchMovieButton"
                  onClick={() => props.searchMoviesByName(movieQuery)}>Search movie</Button>
            <Button color="primary"
                    id="feelingLuckyButton"
                    className={classes.button}
                    variant="outlined"
                    onClick={() => handleFeelingLuckyButton()}> Feeling Lucky </Button>
          </div>
        </Grid>
    </Grid>
  )
}
