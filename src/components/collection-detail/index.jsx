import React from 'react';
import CollectionItemForm from '../collection-item-edit';

export default class EditCollectionItem extends React.Component {
    constructor(props) {
        super(props);
        const { query } = this.props.location;
        this.isEditing = (query && query.edit && query.edit !== 'false');
    }

    render() {
        return (
            this.isEditing ?
                <CollectionItemForm { ...this.props } /> :
                <h2>Collection Detail</h2>
        );
    }

};