/**
 * Created by Administrator on 2017/7/7.
 */
import React from 'react';
import App from '../components/app/app';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const Routers = () => (
    <Router>
      <Route path='/' component={App}>

      </Route>
    </Router>
);

export default Routers;

