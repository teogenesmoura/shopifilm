import React from 'react'
import {screen, fireEvent, render} from '@testing-library/react'
import {shallow, mount} from 'enzyme'
import ReactDOM from 'react-dom'
import MoviesList from './../index'
import MockTheme from './../../../mockTheme'
import {Button} from '@material-ui/core'

describe('Testing interactions on MoviesList', () => {
  const searchResult = [{"Title":"The Polar Express","Year":"2004","imdbID":"tt0338348","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_SX300.jpg"},{"Title":"The Polar Express","Year":"2004","imdbID":"tt0433622","Type":"game","Poster":"N/A"},{"Title":"The Polar Express","Year":"2003","imdbID":"tt8112192","Type":"movie","Poster":"N/A"}]
  const addMovieToNominationList = jest.fn()
  const wrapper = mount(<MockTheme><MoviesList searchResult={searchResult} addMovieToNominationList={addMovieToNominationList}></MoviesList></MockTheme>)

  test('Test if Movieslist renders without crash', () => {
      const div = document.createElement("div")
      let searchMoviesByName = jest.fn()
      ReactDOM.render(<MockTheme><MoviesList searchResult={searchResult} addMovieToNominationList={addMovieToNominationList}></MoviesList></MockTheme>, div)
      ReactDOM.unmountComponentAtNode(div)
  })

  test('Nominating a movie doesnt break page', () => {
    const nominateButton = wrapper.findWhere(node => node.is(Button)).last()
    nominateButton.simulate('click')
  })
})
