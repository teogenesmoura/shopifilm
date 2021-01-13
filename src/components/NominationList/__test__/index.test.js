import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import NominationList from './../index'
import { Button, TextField } from '@material-ui/core'
import {mount} from "enzyme";
import MockTheme from './../../../mockTheme'

test('Test if NominationList renders without crash', () => {
    const div = document.createElement("div")
    let addMovieToNominationList, removeFromNominationList = jest.fn()
    let nominationList = []
    ReactDOM.render(<MockTheme><NominationList nominationList={nominationList}
                                    addMovieToNominationList={addMovieToNominationList}
                                    removeFromNominationList={removeFromNominationList}></NominationList></MockTheme>, div)
    ReactDOM.unmountComponentAtNode(div)
})
