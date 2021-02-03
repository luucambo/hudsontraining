const updateDestination = /* GraphQL */ `
mutation UpdateDestination(
    $input: UpdateDestinationInput!
  ) {
    updateDestination(input: $input) {
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



export default updateDestination;