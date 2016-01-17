import './styles.scss';
import React from 'react';
import { Link } from 'react-router';
import { deleteItem as doDeleteAction }from '../../../actions/collection-actions';


export default class CollectionListItem extends React.Component {
    render() {
        return (
            <tr className="collection-list-item">
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.props.country}</td>
                <td>{this.props.date}</td>
                <td>
                    <Link className="glyphicon glyphicon-pencil"
                          to={ '/collection/' + this.props.id } />
                    <span
                        className="glyphicon glyphicon-remove"
                        onClick={ this.deleteItem.bind(this) }>
                    </span>
                </td>
            </tr>
        )
    }

    deleteItem() {
        doDeleteAction(this.props.id);
    }
}

