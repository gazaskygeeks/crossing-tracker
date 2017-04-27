import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Store from './store/store';
import {Provider} from 'react-redux';

render(
    <Provider store={Store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
