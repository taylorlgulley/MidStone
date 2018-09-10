import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import TriviaApp from './TriviaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <TriviaApp />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
