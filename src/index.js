import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './components/app/App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <Router>
        <Route path='/' component={Apps}/>
    </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
