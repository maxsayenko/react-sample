import React from 'react';
import CollectionItemForm from '../collection-item-form';
import CollectionStore from '../../stores/collection-store';
import CollectionActions from '../../actions/collection-actions';

export default class EditCollectionItem extends React.Component {

    constructor(props) {
        super(props);
        this.isEditing = !!this.props.params.id;
    }

    getInitialState() {
        //if (isEditing) {
        //    return
        //}
    }

    render() {
        let formProps = {
            title: 'Edit Item',
            topClassName: 'edit-item',
            onSave: this.update
        };
        if (!this.isEditing) {
            formProps = {
                title: 'New Item',
                topClassName: 'create-item',
                onSave: this.create,
                data: null
            }
        }
        return (
            <CollectionItemForm {...formProps} />
        );
    }

    create(item) {
        CollectionActions.createItem(item);
    }

    update(id, item) {
        CollectionActions.updateItem(id, item);
    }

};