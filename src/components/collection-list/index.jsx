import './styles.scss';

import React from 'react';
import { Link } from 'react-router';
import CollectionStore from '../../stores/collection-store';

import CollectionListItem from './collection-list-item';

export default class CollectionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = CollectionStore.getCollection() || {};
    }

    componentDidMount() {
        CollectionStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        CollectionStore.removeChangeListener(this.onChange.bind(this));
    }

    render() {
        const collectionItems = Object.keys(this.state).map(key => {
            const item = this.state[key];
            const image = Array.isArray(item.images) ? item.images[0] : '';
            return <CollectionListItem
                key={ key }
                title={ item.title }
                author={ item.author }
                country={ item.country }
                date={ item.date }
                id={ item.id }
                />;
        });
        return (
            <div className="collection-list">
                <h2 className=" sub-header">
                    Collection
                    <Link className="addBtn btn btn-primary" to="/collection/add">
                        <span className="glyphicon glyphicon-plus"></span>Add
                    </Link>
                </h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Country</th>
                            <th>Date</th>
                            <th></th>
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

    onChange() {
        this.state = CollectionStore.getCollection();
    }

}
