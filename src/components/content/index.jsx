import React from 'react';

import './dashboard.css';
import Sidebar from './sidebar';
import CollectionList from '../collection-list';
import PrimaryNav from './primary-nav';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <PrimaryNav />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="collection-list col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
