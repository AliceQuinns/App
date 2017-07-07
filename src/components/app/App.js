import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Nav from './nav/nav';
import Carousel from './Carousel/Carousel';
import Square from '../square/square';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path='/' component={Nav}/>
            <Route path='/Carousel' component={Carousel}/>
            <Route path='/Square' component={Square}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
