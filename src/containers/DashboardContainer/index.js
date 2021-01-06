import React, {useState, useEffect} from 'react'
import {searchMovie} from './dataFetcher'
import { Button } from '@material-ui/core';

export default function DashboardContainer(){
  const [searchResult, setSearchResult] = useState('')

  async function searchMoviesByName(name) {
    let res = await searchMovie(name)
    setSearchResult(res.Search)
  }

  return(
    <>
    <Button color="primary" name="searchMovieButton" onClick={() => searchMoviesByName("Blade Runner")}>Search movie</Button>
    <div>{console.log(searchResult)}</div>
    </>
  )
}
