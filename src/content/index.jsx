import React from 'react';

import './dashboard.css';
import Sidebar from '../sidebar';
import InventoryList from '../inventory-list';
import PrimaryNav from '../primary-nav';

const data = JSON.parse(localStorage.getItem('appData'));

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <PrimaryNav />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <InventoryList data={data.inventory} />
                    </div>
                </div>
            </div>
        )
    }
}
