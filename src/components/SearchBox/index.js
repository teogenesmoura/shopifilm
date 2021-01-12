import React, {useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Top100MoviesIMDB from './../../top100MoviesIMDB'

const useStyles = makeStyles((theme) => ({
  searchTextField: {
    width: '30%',
    alignSelf: 'center'
  },
  input: {
    color: 'red'
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
    <>
      <TextField id="outlined-search"
               variant="outlined"
               label="Search for a movie"
               color="secondary"
               InputProps={{
                 className: classes.input
               }}
               className={classes.searchTextField}
               value={movieQuery}
               onChange={handleChange}
               type="search" />
      <Button color="primary"
            id="searchMovieButton"
            variant="outlined"
            data-testid="searchMovieButton"
            onClick={() => props.searchMoviesByName(movieQuery)}>Search movie</Button>
      <Button color="primary"
              id="feelingLuckyButton"
              variant="outlined"
              onClick={() => handleFeelingLuckyButton()}> Feeling Lucky </Button>
    </>
  )
}
