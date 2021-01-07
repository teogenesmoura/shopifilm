import React, {useState, useEffect} from 'react'
import {searchMovie} from './dataFetcher'
import { Button, Grid, TextField } from '@material-ui/core'
import Search from '@material-ui/icons/Search'
import {makeStyles} from '@material-ui/core/styles'
import SearchBox from './../../components/SearchBox'
import MoviesList from './../../components/MoviesList'

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.white,
    padding: '0 1rem',
    height: '100vh',
    display: 'flex',
  },
  searchHolder: {
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  movieList: {
    height: '100vh',
  },
  nominationList: {
    height: '50vh',
  },
}))

export default function DashboardContainer(){
  const classes = useStyles()
  const [searchResult, setSearchResult] = useState('')

  async function searchMoviesByName(movieName) {
    let res = await searchMovie(movieName)
    setSearchResult(res.Search)
  }

  return(
    <>
      <Grid container className={classes.body}>
        <Grid item xs={12} className={classes.searchHolder}>
          <SearchBox searchMoviesByName={searchMoviesByName} />
        </Grid>
        <Grid container>
          <Grid item xs={6} className={classes.movieList}>
            <MoviesList searchResult={searchResult} />
          </Grid>
          <Grid item xs={6} className={classes.nominationList}>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
