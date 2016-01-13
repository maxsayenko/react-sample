import React from 'react';
import CollectionListItem from '../collection-list-item';
import AddCollectionItemButton from '../add-collection-item-button';

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
                date={item.date}
                />
        });
        return (
            <div className="collection-list col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2 className=" sub-header">
                    Collection
                    <AddCollectionItemButton />
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
