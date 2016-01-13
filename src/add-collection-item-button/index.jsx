import React from 'react';
import './styles.css';

export default class AddCollectionItemButton extends React.Component {
    render() {
        return (
            <button className="addBtn btn btn-primary">
                <span className="glyphicon glyphicon-plus"></span>Add
            </button>
        )
    }
}
