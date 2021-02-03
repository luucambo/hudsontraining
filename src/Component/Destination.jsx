import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DestinationForm from "./DestinationForm";
import DestinationView from "./DestinationView"
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default class Destination extends Component {
    state = {
        isEditing: false
    }

    onEditDestination = () => {
        this.setState({ isEditing: true });
    }

    handleEditCancel = () => {
        this.setState({ isEditing: false })
    }

    handleEditSave = (data) => {
        this.setState({ isEditing: false });
        this.props.onSave(data);
    }

    render() {
        var { isEditing } = this.state;
        var { destination } = this.props;
        return (
            <div className="card col-md-4" key={destination.id} >
                <div className='card-body' >
                    {
                        !isEditing ?
                            <>
                                <button><FontAwesomeIcon icon={faEdit} onClick={this.onEditDestination}></FontAwesomeIcon></button>
                                <DestinationView destination={destination} />
                            </>
                            : <DestinationForm destination={destination} handleEditSave={this.handleEditSave} handleEditCancel={this.handleEditCancel} />
                    }
                </div>
            </div>
        );
    }
}
