import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from './nav/nav';
import Carousel from './Carousel/Carousel';
import HorizontalList from './horizontalList/horizontalList'

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route component={Nav} />
            <Route component={Carousel}/>
            <Route component={HorizontalList}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
