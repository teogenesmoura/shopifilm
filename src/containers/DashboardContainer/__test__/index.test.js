import React from 'react'
import {screen, fireEvent, render} from '@testing-library/react'
import {shallow, mount} from 'enzyme'
import DashboardContainer from './../index'
import SearchBox from './../../../components/SearchBox'
import MoviesList from './../../../components/MoviesList'
import NominationList from './../../../components/NominationList'
import fiveMoviesResponse from './mockFiveMovies'
import MockTheme from './../../../mockTheme'
import {Button, Snackbar} from '@material-ui/core'
import {MAX_MOVIES_ERROR} from './../../../errors'

beforeEach(() => {
  fetch.resetMocks()
  fetch.doMock()
  let jestSpy = jest.spyOn(global, 'fetch')
  jestSpy.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(fiveMoviesResponse)
  })
  jestSpy.mockRejectedValueOnce({
    json: jest.fn().mockRejectedValueOnce('error')
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('clicking "search movie" submits request to external API', async () => {
  const wrapper = render(<DashboardContainer></DashboardContainer>)
  fireEvent.click(screen.getByText('Search movie')); //tests valid API response
  fireEvent.click(screen.getByText('Search movie')); //tests error catching
})

describe('Testing interactions on DashboardContainer', () => {
  const wrapper = mount(<MockTheme><DashboardContainer></DashboardContainer></MockTheme>)

  test('sets state from local storage', () => {
    const nominatedMovie = JSON.stringify({"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"})
    window.localStorage.setItem('@shoppies/nominationList', nominatedMovie)
    const dashboard = mount(<DashboardContainer></DashboardContainer>)
  })

  test('Searching a movie doesnt break page', () => {
    const searchBoxWrapper = wrapper.findWhere(node => node.is(SearchBox))
    const input = searchBoxWrapper.find('#outlined-search').last()
    input.instance().value = "Star Wars"
    input.simulate("change")
    const searchButton = searchBoxWrapper.findWhere(node => node.is(Button))
    searchButton.simulate('click')
  })

  test('nominating a movie doesnt break page', () => {
    fetch.mockResponseOnce(fiveMoviesResponse)
    const searchBoxWrapper = wrapper.findWhere(node => node.is(SearchBox))
    const input = searchBoxWrapper.find('#outlined-search').last()
    input.instance().value = "Star Wars"
    input.simulate("change")
    const searchButton = searchBoxWrapper.findWhere(node => node.is(Button))
    searchButton.simulate('click')
    wrapper.update()
    const moviesList = wrapper.findWhere(node => node.is(MoviesList))
    const nominateButton = moviesList.findWhere(node => node.is(Button)).last()
    nominateButton.simulate('click')
  })

  test('removing a nominated movie doesnt break page', () => {
    fetch.mockResponseOnce(fiveMoviesResponse)
    const searchBoxWrapper = wrapper.findWhere(node => node.is(SearchBox))
    const input = searchBoxWrapper.find('#outlined-search').last()
    input.instance().value = "Star Wars"
    input.simulate("change")
    const searchButton = searchBoxWrapper.findWhere(node => node.is(Button))
    searchButton.simulate('click')
    wrapper.update()
    const moviesList = wrapper.findWhere(node => node.is(MoviesList))
    const nominateButton = moviesList.findWhere(node => node.is(Button)).last()
    nominateButton.simulate('click')
    const nominatedList = wrapper.findWhere(node => node.is(NominationList)).last()
    const removeButton = nominatedList.find('#removeButton').last()
    removeButton.simulate('click')
  })

  test('trying to add more than 5 movies raises an alert', () => {
    fetch.mockResponseOnce(fiveMoviesResponse)
    const searchBoxWrapper = wrapper.findWhere(node => node.is(SearchBox))
    const input = searchBoxWrapper.find('#outlined-search').last()
    input.instance().value = "Star Wars"
    input.simulate("change")
    const searchButton = searchBoxWrapper.findWhere(node => node.is(Button))
    searchButton.simulate('click')
    wrapper.update()
    const moviesList = wrapper.findWhere(node => node.is(MoviesList))
    const nominateButtons = moviesList.findWhere(node => node.is(Button))
    nominateButtons.forEach((button, index) => {
      button.simulate('click')
    })
    const snackBar = wrapper.findWhere(node => node.is(Snackbar)).last()
  })

})
