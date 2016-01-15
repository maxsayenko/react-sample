import React from 'react';

export default class InputGroup extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="inputEmail3"
                       className={ this.props.labelClasses + ' col-sm-2 control-label' }>
                    { this.props.name }
                </label>
                <div className="col-sm-8">
                    <input type="text"
                           className={ this.props.inputClasses + ' form-control'}
                           id={'item' + this.props.name }
                           placeholder={ this.props.name } />
                </div>
            </div>
        )
    }
};