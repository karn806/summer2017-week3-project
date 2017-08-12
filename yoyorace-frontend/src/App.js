import React, { Component } from 'react';
import './App.css';
import YoyoRace from './YoyoRace'
import AskMe from './AskMe'
import Page from './Page'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Page>
            <Route path="/" exact component={YoyoRace} />
            <Route path="/ask-me" exact component={AskMe} />
          </Page>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
