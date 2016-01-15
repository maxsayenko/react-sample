import React from 'react';
import InputGroup from '../input-group';

const fields = [
    'Title',
    'Author',
    'Region',
    'Country',
    'Date',
    'Material',
    'Cost',
    'Source',
    'Location'
];

export default class CollectionItemForm extends React.Component {

    submit(e) {
        e.preventDefault();
        const data = this.serializeForm();
        this.props.onSave(data);
    }

    render() {
        return (
            <div className={ 'collection-item-form ' + this.props.topClassName }>
                <h2>{ this.props.title }</h2>
                <form className="form-horizontal">
                    { fields.map( (field, idx) =>
                        <InputGroup
                            key={ idx }
                            labelClasses='col-sm-2'
                            inputClasses='col-sm-8'
                            ref={ field }
                            name={ field } />
                    ) }
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={ this.submit.bind(this) }>Save</button>
                        </div>
                    </div>
                </form>
            </div>        );
    }

    serializeForm() {
        let data = {};
        const refs = this.refs;
        fields.forEach( (refName) => {
            const field = refName.toLowerCase();
            data[field] = refs[refName].state.value;
        });
        return data;
    }

};