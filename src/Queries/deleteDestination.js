const deleteDestination = /* GraphQL */ `
  mutation DeleteDestination(
    $input: DeleteDestinationInput!
  ) {
    deleteDestination(input: $input) {
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

export default deleteDestination;
