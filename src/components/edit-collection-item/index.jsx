import React from 'react';
import CollectionItemForm from './collection-item-form';
import CollectionStore from '../../stores/collection-store';
import {
    createItem as doCreateAction,
    updateItem as doUpdateAction } from '../../actions/collection-actions';

export default class EditCollectionItem extends React.Component {

    constructor(props) {
        super(props);
        this.isEditing = !!this.props.params.id;
        this.state = this.isEditing ?
            CollectionStore.getCollection()[this.props.params.id] :
            null;
    }

    render() {
        let formProps = {
            title: 'Edit Item',
            topClassName: 'edit-item',
            onSave: this.update.bind(this),
            formValues: this.state
        };
        if (!this.isEditing) {
            formProps = {
                title: 'New Item',
                topClassName: 'create-item',
                onSave: this.create.bind(this),
                formValues: {}
            }
        }
        formProps.inputFields = [
            'Title',
            'Author',
            //'Region',
            'Country',
            'Date'/*,
             'Material',
             'Cost',
             'Source',
             'Location'*/
        ];
        return (
            <CollectionItemForm { ...formProps } />
        );
    }

    create(item) {
        doCreateAction(item);
    }

    update(item) {
        doUpdateAction(this.props.params.id, item);
    }

};