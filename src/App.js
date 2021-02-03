import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { API, graphqlOperation, Amplify } from 'aws-amplify'

import DestinationList from "./Component/DestinationList.jsx";
import AddDestination from "./Component/AddDestination.jsx";

import config from './aws-exports.js'

import getAllDestinations from './Queries/getAllDestinations';

import addDestination from './Queries/addDestination'
import onCreateDestination from './Queries/onCreateDestination';

import updateDestination from './Queries/updateDestination';
import onUpdateDestination from './Queries/onUpdateDestination';

import  deleteDestination from './Queries/deleteDestination';
import onDeleteDestination from './Queries/onDeleteDestination';

// cấu hình api client
Amplify.configure(config);

const appHeaderStyle = {
  marginBottom: '20px'
};

const headerStyle = {
  color: 'white',
  padding: '10px'
}

class Home extends React.Component {
  async componentDidMount() {
    var destinations = await API.graphql(graphqlOperation(getAllDestinations));
    this.setState({ destinations: destinations.data.getAllDestinations });

    API.graphql(graphqlOperation(onCreateDestination)
    ).subscribe({
      next: ({provider, value}) => this.handleAddedNewItem(provider, value)
    });

    API.graphql(graphqlOperation(onUpdateDestination)
    ).subscribe({
      next: ({provider, value}) => this.handleUpdatedItem(provider, value)
    });

    API.graphql(graphqlOperation(onDeleteDestination)
    ).subscribe({
      next: ({provider, value}) => this.handleDeleteItem(provider, value)
    });
  }

  state = {
    destinations: []
  }

  //subscriptions
  handleDeleteItem = (provider,value) => {
    console.log(provider,value)
    var deletedDestination = value.data.onDeleteDestination;
    var destinations = this.state.destinations.filter((value, index) => {
      if (value.id != deletedDestination.id)
        return value;
    })

    this.setState({ destinations: destinations })
  }

  handleAddedNewItem = (provider,value) => {
    console.log(provider,value)
    var newDestination = value.data.newDestination;
    var destinations = [...this.state.destinations, newDestination];
    this.setState({ destinations: destinations });
  }

  handleUpdatedItem = (provider,value) => {
    console.log(provider,value)
    var updatedDestination = value.data.onUpdateDestination;
    var destinations = this.state.destinations.map((value, index) => {
      if (value.id == updatedDestination.id)
        return updatedDestination;
      else return value;
    })

    this.setState({ destinations: destinations })
  }

  //commponent handle functions
  handleOnAdd = async (data) => {
    await API.graphql(graphqlOperation(addDestination, data));
  }

  handleOnUpdate = async (data) => {
    await API.graphql(graphqlOperation(updateDestination, { input: data }));
  }

  handleOnDelete = async (data) => {
    await API.graphql(graphqlOperation(deleteDestination, { input: data }));
  }

  render() {
    var { destinations } = this.state;
    console.log(destinations)
    return (
      <div>
        <header className="App-header" style={appHeaderStyle}>
          <h2 className="ui center aligned icon header">
            <img src="https://d1.awsstatic.com/serverless/Lambda%20Resources%20images/sam_acorn_shadow.8915b92ddd48a78d8c05d55ce4b26e472889c573.png" className="App-logo" alt="logo" />
            <span style={headerStyle}>Welcome to Serverless Bytes #3: Serverless Web App powered by AWS AppSync</span>
          </h2>
        </header>
        <div className="ui container">
          <h3 className="ui horizontal divider header">
            <i className="paper plane icon"></i>
            Travel Destinations and Current Conditions
          </h3>
          <DestinationList destinations={destinations} onSave={this.handleOnUpdate} onDelete={this.handleOnDelete} />
          <h4 className="ui horizontal divider header">
            <i className="tag icon"></i>
            Create a destination
          </h4>
          <AddDestination onAdd={this.handleOnAdd} />
        </div>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Home} />
    </div>
  </Router>
);

export default App;