const onDeleteDestination = /* GraphQL */ `
  subscription OnDeleteDestination {
    onDeleteDestination {
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
export default onDeleteDestination;