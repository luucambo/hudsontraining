const onUpdateDestination = /* GraphQL */ `
  subscription OnUpdateDestination {
    onUpdateDestination {
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

export default onUpdateDestination;