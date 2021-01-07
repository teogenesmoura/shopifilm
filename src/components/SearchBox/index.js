import React, {useState} from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import Search from '@material-ui/icons/Search'
import {makeStyles} from '@material-ui/core/styles'

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
            name="searchMovieButton"
            variant="outlined"
            data-testid="searchMovieButton"
            onClick={() => props.searchMoviesByName(movieQuery)}>Search movie</Button>
    </>
  )
}
