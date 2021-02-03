import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DestinationForm from "./DestinationForm";
import DestinationView from "./DestinationView"
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Destination extends Component {
    state = {
        isEditing: false
    }

    onEditDestination = () => {
        this.setState({ isEditing: true });
    }

    onDeleteDestination = () => {
        typeof (this.props.onDelete) === "function" && this.props.onDelete({id:this.props.destination.id})
    }

    handleEditCancel = () => {
        this.setState({ isEditing: false })
    }

    handleEditSave = (data) => {
        this.setState({ isEditing: false });
        typeof (this.props.onSave) === "function" && this.props.onSave(data);
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

                                <DestinationView destination={destination} />
                                <div className='float-right'>
                                    <button className='btn btn-warning btn-small mr-2'><FontAwesomeIcon icon={faEdit} onClick={this.onEditDestination}></FontAwesomeIcon></button>
                                    <button className='btn btn-danger btn-small'><FontAwesomeIcon icon={faTimes} onClick={this.onDeleteDestination} /></button>
                                </div>
                            </>
                            : <DestinationForm destination={destination} handleEditSave={this.handleEditSave} handleEditCancel={this.handleEditCancel} />
                    }
                </div>
            </div>
        );
    }
}
