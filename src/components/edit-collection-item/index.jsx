import React from 'react';

export default class EditCollectionItem extends React.Component {
    render() {
        let title = 'New Item';
        if (this.props.params.id) {
            title = 'Edit Item';
        }

        return (
            <div className="edit-collection-item">
                <h2>{ title }</h2>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemTitle" placeholder="Title" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Author</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemAuthor" placeholder="Author" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Region</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemRegion" placeholder="Region" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Country</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemCountry" placeholder="Country" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Date</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemDate" placeholder="Date" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Material</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemMaterial" placeholder="Material" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Cost</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemCost" placeholder="Cost" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Source</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemSource" placeholder="Source" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Location</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="itemLocation" placeholder="Location" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};