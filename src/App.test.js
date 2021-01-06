import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const div = document.createElement("div")
  ReactDOM.render(<App></App>, div)
  ReactDOM.unmountComponentAtNode(div)
});
