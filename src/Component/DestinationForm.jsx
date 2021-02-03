import React, { Component } from "react";

export default class DestinationForm extends Component {
    state = {
        description: this.props.destination.description
    }

    handleEditSave = () => {
        var data = { ...this.state, cityId: this.props.destination.cityId, id:this.props.destination.id };
        console.log(data)
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
            <>
                <label>{destination.id}</label>
                <input type="text" value={this.state.description} onChange={this.handleFieldEdit.bind(this, 'description')} />
                <button onClick={this.handleEditSave.bind(this, destination.id)}>Save</button>
                <button onClick={this.handleEditCancel.bind(this, destination.id)}>Cancel</button>
            </>
        );
    }
}