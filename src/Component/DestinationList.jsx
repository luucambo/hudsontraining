import React, { Component } from "react";
import Destination from "./Destination";

import { API, graphqlOperation, Amplify } from 'aws-amplify'

export default class DestinationList extends Component {
    render() {
        const { destinations } = this.props;

        return (
            <div className='row'>
                {
                    [].concat(destinations).sort((a, b) => b.id - a.id).map((destination) => {
                        return <Destination key={destination.id} destination={destination} onSave={this.props.onSavedItem} />
                    })
                }
            </div>
        );
    }
}
