import React, {useState} from 'react'
import {searchMovie} from './dataFetcher'
import { Grid, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles'
import SearchBox from './../../components/SearchBox'
import MoviesList from './../../components/MoviesList'
import NominationList from './../../components/NominationList'
import {MAX_MOVIES_ERROR} from './../../errors'

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
  const [nominationList, setNominationList] = useState([])
  const [snackBarOpen, setSnackBarOpen] = useState(false)

  function addMovieToNominationList(movie) {
    if (nominationList.length == 5) {
      setSnackBarOpen(true)
    } else {
      setNominationList([...nominationList, movie])
    }
  }

  function removeFromNominationList(movie) {
    let temp = [...nominationList]
    let index = temp.indexOf(movie)
    if (index !== -1) {
      temp.splice(index, 1)
      setNominationList(temp)
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason == 'clickaway') {
      return;
    }
    setSnackBarOpen(false)
  }

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
            <MoviesList searchResult={searchResult}  nominationList={nominationList} addMovieToNominationList={addMovieToNominationList} />
          </Grid>
          <Grid item xs={6} className={classes.nominationList}>
            <NominationList nominationList={nominationList} addMovieToNominationList={addMovieToNominationList} removeFromNominationList={removeFromNominationList} />
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {MAX_MOVIES_ERROR}
        </MuiAlert>
      </Snackbar>
    </>
  )
}
