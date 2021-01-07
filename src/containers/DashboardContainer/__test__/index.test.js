import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import DashboardContainer from './../index'
const mockResponse = {"Search":[{"Title":"The Polar Express","Year":"2004","imdbID":"tt0338348","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_SX300.jpg"},{"Title":"The Polar Express","Year":"2004","imdbID":"tt0433622","Type":"game","Poster":"N/A"},{"Title":"The Polar Express","Year":"2003","imdbID":"tt8112192","Type":"movie","Poster":"N/A"}],"totalResults":"3","Response":"True"}

beforeEach(() => {
  let jestSpy = jest.spyOn(global, 'fetch')
  jestSpy.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(mockResponse)
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
