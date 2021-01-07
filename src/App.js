import logo from './logo.svg';
import './App.css';
import DashboardContainer from './containers/DashboardContainer'
import {StylesProvider, ThemeProvider} from '@material-ui/core'
import {customTheme} from './customTheme'

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={customTheme}>
          <DashboardContainer theme={customTheme}></DashboardContainer>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
