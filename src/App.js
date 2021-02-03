import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { API, graphqlOperation, Amplify } from 'aws-amplify'

import DestinationList from "./Component/DestinationList.jsx";
import AddDestination from "./Component/AddDestination.jsx";

import config from './aws-exports.js'

import onCreateDestination from './Queries/onCreateDestination';
import onUpdateDestination from './Queries/onUpdateDestination';
import addDestination from './Queries/onCreateDestination';
import getAllDestinations from './Queries/getAllDestinations';
import updateDestination from './Queries/updateDestination';


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
      next: (provider, value) => this.handleAddedNewItem(provider, value)
    });

    API.graphql(graphqlOperation(onUpdateDestination)
    ).subscribe({
      next: ({ provider, value }) => this.handleUpdatedItem(provider, value)
    });
  }

  state = {
    destinations: []
  }

  handleAddedNewItem = (provider, value) => {
    var newDestination = value.data.newDestination;
    var destinations = [...this.state.destinations, newDestination];
    this.setState({ destinations: destinations });
  }

  handleUpdatedItem = (provider, value) => {
    console.log(provider, value)
    var updatedDestination = value.data.onUpdateDestination;
    console.log('abc',updatedDestination)
    var destinations = this.state.destinations.map((value, index) => {
      if (value.id == updatedDestination.id)
        return updatedDestination;
      else return value;
    })

    console.log('abc',destinations)
    this.setState({ destinations: destinations })
  }

  handleOnAdd = async (data) => {
    await API.graphql(graphqlOperation(addDestination, data));
  }

  handleSavedItem = async (data) => {
    console.log(data)
    await API.graphql(graphqlOperation(updateDestination, { input: data }));
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
          <DestinationList destinations={destinations} onSavedItem={this.handleSavedItem} addedNewItem={this.handleAddedNewItem} />
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

// const AllDestinationsWithData = compose(
//   graphql(AllDestinationsQuery, {
//     options: {
//       fetchPolicy: 'cache-and-network'
//     },
//     props: (props) => {
//       return {
//         destinations: props.data.getAllDestinations,

//         // START - NEW PROP :
//         subscribeToDestinations: params => {
//           props.data.subscribeToMore({
//             document: NewDestinationsSubscription,
//             updateQuery: (previousResult, { subscriptionData, variables }) => {
//               // Perform updates on previousResult with subscriptionData
//               console.log(previousResult);

//               var newDestination = subscriptionData.data.newDestination;
//               console.log(newDestination);

//               const newObj = {};
//               newObj.getAllDestinations = [newDestination, ...previousResult.getAllDestinations];
//               console.log(newObj);

//               return newObj;
//             }

//             // (prev, { subscriptionData: {data: {newDestination}} }) => ({
//             //   ...prev,
//             //   getAllDestinations: { getAllDestinations: [newDestination, prev.getAllDestinations.filter(d => d.id != newDestination.id)] , __typename: 'Destinations'}
//             // })
//           });
//         }
//       }
//     }
//   })
// )(AllDestinations);

// const NewDestinationWithData = graphql(NewDestinationMutation, {
//   props: (props) => ({
//     onAdd: destination => props.mutate({
//       variables: destination,
//       optimisticResponse: () => ({ addDestination: { ...destination, __typename: 'Destination', version: 1 } }),
//     })
//   }),
//   options: {
//     //refetchQueries: [{ query: AllDestinationsQuery }],
//     update: (dataProxy, { data: { addDestination } }) => {
//       const query = AllDestinationsQuery;
//       const data = dataProxy.readQuery({ query });
//       data.getAllDestinations.push(addDestination);

//       dataProxy.writeQuery({ query, data });
//     },
//     fetchPolicy: 'no-cache',
//     disableOffline: false
//   }
// })(AddDestination);

export default App;