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
