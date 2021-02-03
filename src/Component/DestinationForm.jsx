import React, { Component } from "react";

export default class DestinationForm extends Component {
    state = {
        description: this.props.destination.description,
        cityId: this.props.destination.cityId
    }

    handleEditSave = () => {
        var data = { ...this.state, id: this.props.destination.id };
        typeof (this.props.handleEditSave) == "function" && this.props.handleEditSave(data);
    }

    handleFieldEdit(fieldName, event) {
        var newState = { [fieldName]: event.target.value };
        this.setState(newState);
    }

    handleEditCancel() {
        typeof (this.props.handleEditCancel) && this.props.handleEditCancel();
    }

    render() {
        var { destination } = this.props;
        return (
            <div className='form'>
                <div className='form-group'>
                    <label>{destination.id}</label>
                </div>
                <div className='form-group'>
                    <input className='form-control' type="text" value={this.state.description} onChange={this.handleFieldEdit.bind(this, 'description')} />
                </div>
                <div className='form-group'>
                    <input className='form-control' type="text" value={this.state.cityId} onChange={this.handleFieldEdit.bind(this, 'cityId')} />
                </div>

                <button className='btn btn-warning mr-2' onClick={this.handleEditSave.bind(this, destination.id)}>Save</button>
                <button className='btn btn-success' onClick={this.handleEditCancel.bind(this, destination.id)}>Cancel</button>
            </div>
        );
    }
}