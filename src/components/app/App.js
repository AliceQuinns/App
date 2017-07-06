import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from './nav/nav';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route component={Nav}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
