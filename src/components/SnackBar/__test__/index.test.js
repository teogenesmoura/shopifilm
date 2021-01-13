import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MuiAlert from '@material-ui/lab/Alert';
import { IconButton } from '@material-ui/core';
import SnackBar from './../index'
import {mount} from "enzyme";

test('Test if SearchBox renders without crash', () => {
    const div = document.createElement("div")
    const setSnackBarOpen = jest.fn()
    const snackBarOpen=false
    ReactDOM.render(<SnackBar setSnackBarOpen={setSnackBarOpen} snackBarOpen={snackBarOpen}></SnackBar>, div)
    ReactDOM.unmountComponentAtNode(div)
})

test('test if clicking on snacking bar breaks page', () => {
  const setSnackBarOpen = jest.fn()
  const snackBarOpen=true
  const wrapper = mount(<SnackBar setSnackBarOpen={setSnackBarOpen} snackBarOpen={snackBarOpen}></SnackBar>)
  const iconButton = wrapper.findWhere(node => node.is(IconButton)).last()
  iconButton.simulate('click')
  fireEvent.mouseDown(document.body)
})

test('clicking outside snackbar should not break page', () => {
  const setSnackBarOpen = jest.fn()
  const snackBarOpen=true
  mount(<SnackBar setSnackBarOpen={setSnackBarOpen} snackBarOpen={snackBarOpen}></SnackBar>)
  fireEvent.mouseDown(document.body)
})
//
// test('does search button exists', () => {
//   let searchMoviesByName = jest.fn()
//   const { getByTestId } = render(
//    <SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>
//    )
//   expect(getByTestId('searchMovieButton')).toBeTruthy(); //passes
// })
//
// test('typing into search box doesnt break page', () => {
//   let searchMoviesByName = jest.fn()
//   const wrapper = mount(<SearchBox searchMoviesByName={searchMoviesByName}></SearchBox>)
//   const searchBox = wrapper.find("#outlined-search").last()
//   searchBox.instance().value = "summaryBox test";
//   searchBox.simulate("change");
// })
//
// test('clicking search button doesnt break page', () => {
//   let searchMoviesByName = jest.fn()
//   const wrapper = mount(<SearchBox searchMoviesByName={searchMoviesByName} />)
//   const button = wrapper.find('#searchMovieButton').last()
//   button.simulate('click')
// })
//
// test('clicking feeling lucky button doesnt break page', () => {
//   let searchMoviesByName = jest.fn()
//   const wrapper = mount(<SearchBox searchMoviesByName={searchMoviesByName} />)
//   const feelingLuckyButton = wrapper.find('#feelingLuckyButton').last()
//   feelingLuckyButton.simulate('click')
// })
