import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Square from './components/square/square';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'animate.css';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="/Square" component={Square}/>
        </Switch>
      </div>
    </BrowserRouter>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
