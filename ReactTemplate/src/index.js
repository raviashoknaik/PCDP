import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Body from './body';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('body'));

serviceWorker.unregister();
