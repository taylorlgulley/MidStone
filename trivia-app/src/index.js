import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TriviaApp from './TriviaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <TriviaApp />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
