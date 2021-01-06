import {OMDB_API_URL, REACT_APP_OMDB_API_KEY} from './../../API_URLs'

export async function searchMovie(title) {
  const url = OMDB_API_URL  +  title + '&apikey=' + REACT_APP_OMDB_API_KEY
  const response = await fetch(url)
                     .then(response => response.json())
                     .then(body => { return body })
                     .catch(err => { return err })
  return response
}
