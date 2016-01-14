'use strict';

const data = require('../model').default;
window.localStorage.setItem('appData', JSON.stringify(data));

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Content from './content';
import CollectionList from './collection-list';
import NotFound from './not-found';

ReactDOM.render(
    <Router history={ createBrowserHistory() }>
        <Redirect from="/" to="/collection" />
        <Route path="/" component={ Content }>
            <Route path="collection" component={ CollectionList } />
            <Route path="*" component={ NotFound } />
        </Route>
    </Router>, document.getElementById('app')
);
