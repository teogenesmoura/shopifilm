import React, {useState, useEffect} from 'react'
import {searchMovie} from './dataFetcher'
import { Grid, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SearchBox from './../../components/SearchBox'
import MoviesList from './../../components/MoviesList'
import NominationList from './../../components/NominationList'
import SnackBar from './../../components/SnackBar'

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.white,
    height: '100vh',
    flexGrow: '1',
    display: 'flex',
  },
  leftContainer: {
    backgroundColor: theme.palette.primary.white,
  },
  rightContainer: {
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center'
  },
  searchHolder: {
    flexDirection: 'column'
  },
  resultHolder: {
    overflow: 'auto'
  },
}))

export default function DashboardContainer(){
  const classes = useStyles()
  const [searchResult, setSearchResult] = useState('')
  const [nominationList, setNominationList] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)

  useEffect(() => {
    const savedNominationList = localStorage.getItem('@shoppies/nominationList')
    if (savedNominationList !== null) {
      setNominationList(JSON.parse(savedNominationList))
    }
  },[])

  function addMovieToNominationList(movie) {
    if (nominationList.length >= 5) {
      setSnackBarOpen(true)
    } else {
      setNominationList([...nominationList, movie])
      localStorage.setItem('@shoppies/nominationList', JSON.stringify([...nominationList, movie]))
    }
  }

  function removeFromNominationList(movie) {
    let temp = [...nominationList]
    let index = temp.indexOf(movie)
    if (index !== -1) {
      temp.splice(index, 1)
      setNominationList(temp)
      localStorage.setItem('@shoppies/nominationList', JSON.stringify(temp))
    }
  }

  async function searchMoviesByName(movieName) {
    let res = await searchMovie(movieName)
    setSearchResult(res.Search)
  }

  return(
    <>
      <Grid container className={classes.body}>
        <Grid item xs={9} className={classes.leftContainer}>
          <Grid container>
            <Grid item xs={4} className={classes.searchHolder}>
              <SearchBox searchMoviesByName={searchMoviesByName} />
            </Grid>
            <Grid item xs={8} className={classes.resultHolder}>
            <MoviesList searchResult={searchResult}  nominationList={nominationList} addMovieToNominationList={addMovieToNominationList} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} className={classes.rightContainer}>
          <NominationList nominationList={nominationList} addMovieToNominationList={addMovieToNominationList} removeFromNominationList={removeFromNominationList} />
        </Grid>
      </Grid>
      <SnackBar setSnackBarOpen={setSnackBarOpen} snackBarOpen={snackBarOpen} />
    </>
  )
}
