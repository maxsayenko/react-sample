'use strict';

const data = require('./model').default;
window.localStorage.setItem('appData', JSON.stringify(data));

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';


ReactDOM.render(
    <Content />,
    document.getElementById('app')
);
