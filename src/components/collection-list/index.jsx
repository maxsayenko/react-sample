import './styles.scss';
import React from 'react';
import CollectionListItem from '../collection-list-item';

export default class CollectionList extends React.Component {

    constructor(props) {
        super(props);
        this.state =  JSON.parse(localStorage.getItem('appData'));
    }

    render() {
        const collectionItems = this.state.collection.map(item => {
            const image = item.images[0];
            return <CollectionListItem
                key={item.id}
                image={image}
                title={item.title}
                author={item.author}
                country={item.country}
                date={item.date}/>;
        });
        return (
            <div className="collection-list">
                <h2 className=" sub-header">
                    Collection
                    <a className="addBtn btn btn-primary" href="/collection/new">
                        <span className="glyphicon glyphicon-plus"></span>Add
                    </a>
                </h2>
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
                            { collectionItems }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
