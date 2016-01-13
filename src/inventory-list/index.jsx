import React from 'react';
import InventoryListItem from '../inventory-list-item';

export default class ContentBody extends React.Component {
    render() {
        const inventoryItems = this.props.data.map(item => {
            const image = item.images[0];
            return <InventoryListItem
                key={item.id}
                image={image}
                title={item.title}
                author={item.author}
                country={item.country}
                date={item.date}
                />
        });
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2 className="sub-header">Inventory List</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Country</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                            { inventoryItems }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};
