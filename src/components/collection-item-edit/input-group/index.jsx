import React from 'react';

export default class InputGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: null };
    }

    componentDidMount() {
        this.setState({ value: this.props.value });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const value = this.state.value;
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
                        placeholder={ this.props.name }
                        onChange={ this.handleChange.bind(this) }
                        value={ this.state.value }
                        />
                </div>
            </div>
        )
    }
};