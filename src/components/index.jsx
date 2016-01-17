'use strict';

// This just a hack to start with a row of data.
if (!localStorage.appData) {
    const data = require('../model').default;
    localStorage.setItem('appData', JSON.stringify(data));
}

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import history from '../history';

import Content from './content';
import CollectionList from './collection-list';
import CollectionDetail from './collection-detail';
import EditCollectionItem from './collection-item-edit';
import NotFound from './not-found';

ReactDOM.render(
    <Router history={ history }>
        <Redirect from="/" to="/collection" />
        <Route path="/" component={ Content }>
            <Route path="collection" component={ CollectionList } />
            <Route path="collection/add" component={ EditCollectionItem } />
            <Route path="collection/:id" component={ CollectionDetail } />
        </Route>
        <Route path="*" component={ NotFound } />
    </Router>, document.getElementById('app')
);
