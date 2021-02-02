import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMarker, faClock } from '@fortawesome/free-solid-svg-icons'
import { API, graphqlOperation } from 'aws-amplify'
import newDestinationSub from './Queries/newDestinationSub';

export default class AllDestinations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: {}
        }
    }

    static defaultProps = {
        destinations: [],
        onDelete: () => null,
        onEdit: () => null,
    }

    renderOrEditdestination = (destination) => {
        const { editing } = this.state;

        const editData = editing[destination.id];
        const isEditing = !!editData;

        const redStyle = {
            color: 'red'
        };
        const blueStyle = {
            color: 'blue'
        };

        var tempStyle = {
            color: 'green'
        };

        if (destination.conditions.current > 80) {
            tempStyle = redStyle;
        }
        else if (destination.conditions.current < 65) {
            tempStyle = blueStyle;
        }

        return (
            <div className="card col-md-4" key={destination.id} >
                <div className='card-body' >
                    {
                        !isEditing ?
                            <>
                                <Link to={`/destination/${destination.id}`} key={destination.id}>
                                    <div className="card-title">{destination.description}</div>
                                    <p><FontAwesomeIcon icon={faCalendar} className="mr-3" />{(destination.cityId)}</p>
                                    <p><FontAwesomeIcon icon={faClock} className="mr-3" />{(destination.conditions.description)}</p>
                                    <p><span style={tempStyle}><FontAwesomeIcon icon={faMarker} className="mr-3" />{destination.conditions.current} F</span></p>
                                </Link>
                            </>
                            : (
                                <tr key={destination.id}>
                                    <td>
                                        {destination.id}
                                    </td>
                                    <td>
                                        <input type="text" value={editData.title} onChange={this.handleFieldEdit.bind(this, destination.id, 'description')} />
                                    </td>

                                    <td>
                                        <button onClick={this.handleEditSave.bind(this, destination.id)}>Save</button>
                                        <button onClick={this.handleEditCancel.bind(this, destination.id)}>Cancel</button>
                                    </td>
                                </tr>
                            )
                    }
                </div>
            </div>
        );

    }

    render() {
        const { destinations } = this.props;

        return (
            <div className='row'>
                {
                    [].concat(destinations).sort((a, b) => b.id - a.id).map(this.renderOrEditdestination)
                }
            </div>
        );
    }
}