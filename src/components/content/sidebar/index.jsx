import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className="active">
                        <Link to="/collection">
                            Collection<span className="sr-only">(current)</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
