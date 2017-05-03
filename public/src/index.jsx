import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes.jsx';
import Store from './store/store';
import {Provider} from 'react-redux';


const render = ()=>ReactDOM.render(
    <Provider store={Store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

render();
Store.subscribe(render)
