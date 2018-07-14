import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// require('dotenv').config(); // tslint:disable-line

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
