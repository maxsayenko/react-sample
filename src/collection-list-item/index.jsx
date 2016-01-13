import React from 'react';
import './styles.css';

export default class CollectionListItem extends React.Component {
    render() {
        return (
            <tr>
                <td><img className="list-image" src={'images/' + this.props.image} alt={this.props.title} /></td>
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.props.country}</td>
                <td>{this.props.date}</td>
            </tr>
        )
    }
}