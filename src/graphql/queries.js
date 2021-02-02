/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllDestinations = /* GraphQL */ `
  query GetAllDestinations {
    getAllDestinations {
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
export const getDestinationsByState = /* GraphQL */ `
  query GetDestinationsByState($state: String!) {
    getDestinationsByState(state: $state) {
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
export const getWeatherCondition = /* GraphQL */ `
  query GetWeatherCondition($City: String!) {
    getWeatherCondition(City: $City) {
      description
      current
      maxTemp
      minTemp
    }
  }
`;
export const getDestination = /* GraphQL */ `
  query GetDestination($id: ID!) {
    getDestination(id: $id) {
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
export const listDestinations = /* GraphQL */ `
  query ListDestinations(
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
