const addDestination = /* GraphQL */ `
  mutation AddDestination($id: ID, $cityId: String!, $description: String!) {
    addDestination(id: $id, cityId: $cityId, description: $description) {
      id
      description
      cityId
      conditions {
        description
        current
        maxTemp
        minTemp
      }
    }
  }
`;

export default addDestination;