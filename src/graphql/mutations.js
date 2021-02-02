/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addDestination = /* GraphQL */ `
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
      createdAt
      updatedAt
    }
  }
`;
export const createDestination = /* GraphQL */ `
  mutation CreateDestination(
    $input: CreateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    createDestination(input: $input, condition: $condition) {
      id
      description
      cityId
      conditions {
        description
        current
        maxTemp
        minTemp
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDestination = /* GraphQL */ `
  mutation UpdateDestination(
    $input: UpdateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    updateDestination(input: $input, condition: $condition) {
      id
      description
      cityId
      conditions {
        description
        current
        maxTemp
        minTemp
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDestination = /* GraphQL */ `
  mutation DeleteDestination(
    $input: DeleteDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    deleteDestination(input: $input, condition: $condition) {
      id
      description
      cityId
      conditions {
        description
        current
        maxTemp
        minTemp
      }
      createdAt
      updatedAt
    }
  }
`;
