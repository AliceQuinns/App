import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter,Route} from 'react-router-dom';
import 'animate.css';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <BrowserRouter>
      <div>
        <Route component={App}/>
      </div>
    </BrowserRouter>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
