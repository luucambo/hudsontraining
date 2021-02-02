import { add } from "lodash";

const addDestination = `
mutation addDestination($cityId: String!, $description: String!){
    addDestination(
      cityId: $cityId
      description: $description
    ){
      __typename
      id
      description
      cityId
      conditions{
        description
          __typename
        maxTemp
        minTemp
        current
          }
    }
  }`;

export default addDestination;