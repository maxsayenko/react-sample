import './styles.scss';
import React from 'react';
import { Link } from 'react-router';
import { deleteItem as doDeleteAction }from '../../../actions/collection-actions';

export default class CollectionListItem extends React.Component {

    render() {
        const fieldsToShow = ['title', 'author', 'country', 'date'];
        const columns = fieldsToShow.map(field => {
            return (
                <td key={ field }>
                    <Link className="collection-detail-link" to={ '/collection/' + this.props.id }>
                        {this.props[field]}
                    </Link>
                </td>
            );
        });
        return (
            <tr className="collection-list-item">
                { columns }
                <td>
                    <Link className="glyphicon glyphicon-pencil"
                          to={ '/collection/' + this.props.id + '?edit=true' } />
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

