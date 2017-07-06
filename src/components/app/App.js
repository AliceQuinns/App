import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Drawer from './Drawer/Drawer';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route component={Nav}/>
            <Route component={Drawer}/>
            <Route component={Footer}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
