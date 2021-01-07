import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBox from './../index'
import { Button, TextField } from '@material-ui/core'
import {mount} from "enzyme";

test('Test if SearchBox renders without crash', () => {
    const div = document.createElement("div")
    let searchMoviesByName = jest.fn()
    ReactDOM.render(<SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>, div)
    ReactDOM.unmountComponentAtNode(div)
})

test('does search button exists', () => {
  let searchMoviesByName = jest.fn()
  const { getByTestId } = render(
   <SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>
   )
  expect(getByTestId('searchMovieButton')).toBeTruthy(); //passes
})

test('typing into search box doesnt break page', () => {
  let searchMoviesByName = jest.fn()
  const wrapper = mount(<SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>)
  const searchBox = wrapper.find("#outlined-search").last()
  searchBox.instance().value = "summaryBox test";
  searchBox.simulate("change");
})

test('clicking button doesnt break page', () => {
  let searchMoviesByName = jest.fn()
  const wrapper = mount(<SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>)
  const button = wrapper.findWhere(node => node.is(Button)).last()
  button.simulate('click')
})
