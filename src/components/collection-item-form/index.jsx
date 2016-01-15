import React from 'react';
import InputGroup from '../input-group';

export default class CollectionItemForm extends React.Component {
    render() {
        var textFields = [
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
        return (
            <div className={ 'collection-item-form ' + this.props.topClassName }>
                <h2>{ this.props.title }</h2>
                <form className="form-horizontal">
                    { textFields.map( (field, idx) =>
                        <InputGroup
                            key={ idx }
                            labelClasses='col-sm-2'
                            inputClasses='col-sm-8'
                            name={ field } />
                    ) }
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={ this.props.onSave }>Save</button>
                        </div>
                    </div>
                </form>
            </div>        );
    }
};