import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className="active"><a href="#">Collection<span className="sr-only">(current)</span></a></li>
                </ul>
            </div>
        )
    }
}
