import React from 'react';
import history from '../../../history';

import './styles.css';

export default class CollectionListItem extends React.Component {
    render() {
        return (
            <tr onClick={ this.goToEdit.bind(this) }>
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.props.country}</td>
                <td>{this.props.date}</td>
            </tr>
        )
    }

    goToEdit() {
        history.replaceState(null, '/collection/' + this.props.id);
    }
}

