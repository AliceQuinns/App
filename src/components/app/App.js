import React from 'react';
import './app.css'
import Nav from '../nav/nav';
import 'react-fetch';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route path='/' component={Nav}/>
        </Router>
    );
  }
  componentDidMount() {
      console.log("fetch");
      fetch('https://api.github.com/users/octocat/gists')
          .then((response) => {console.log(response)})
          .then((responseText) => {console.log(responseText)})
          .catch((error)=>{console.log(error)})
  }
}

export default App;
