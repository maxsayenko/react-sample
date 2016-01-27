import React from 'react';
import CollectionItemForm from '../collection-item-edit';

export default class CollectionDetail extends React.Component {
    constructor(props) {
        super(props);
        const { query } = this.props.location;
        this.isEditing = (query && query.edit && query.edit !== 'false');
    }

    render() {
        let editForm = <CollectionItemForm { ...this.props } />;
        let detailContent =
            <div>
                <h2>Collection Detail</h2>
                <section>
                    Some detail stuff will go here.
                </section>
            </div>;

        return (
            this.isEditing ? editForm : detailContent
        );
    }

};