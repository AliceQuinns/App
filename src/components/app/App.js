import React from 'react';
import './app.css'
import Nav from '../nav/nav';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route path='/' component={Nav}/>
        </Router>
    );
  }
}

export default App;
