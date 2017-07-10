import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Router/Routers';
import 'animate.css';
import registerServiceWorker from './registerServiceWorker';

const Index = (routes) => (
    <Routers/>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
