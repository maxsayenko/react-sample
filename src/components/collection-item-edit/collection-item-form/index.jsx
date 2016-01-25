import React from 'react';
import InputGroup from '../input-group';

export default class CollectionItemForm extends React.Component {

    render() {
        return (
            <div className={ 'collection-item-form ' + this.props.topClassName }>
                <h2>{ this.props.title }</h2>
                <form className="form-horizontal">
                    { this.props.inputFields.map( (field, idx) =>
                        <InputGroup
                            key={ idx }
                            labelClasses='col-sm-2'
                            inputClasses='col-sm-8'
                            ref={ field }
                            name={ field }
                            value={ this.props.formValues[field.toLowerCase()] }
                            />
                    ) }
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={ this.submit.bind(this) }>Save</button>
                        </div>
                    </div>
                </form>
            </div>        );
    }

    submit(e) {
        e.preventDefault();
        const data = this.serializeForm();
        this.props.onSave(data);
    }

    serializeForm() {
        let data = {};
        this.props.inputFields.forEach( (refName) => {
            data[refName.toLowerCase()] = this.refs[refName].state.value;
        });
        return data;
    }

};