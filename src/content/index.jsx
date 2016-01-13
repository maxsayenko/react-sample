import React from 'react';

import './dashboard.css';
import Sidebar from '../sidebar';
import CollectionList from '../collection-list';
import PrimaryNav from '../primary-nav';

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <PrimaryNav />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <CollectionList />
                    </div>
                </div>
            </div>
        );
    }
}
