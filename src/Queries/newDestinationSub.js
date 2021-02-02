const newDestinationSub =`
subscription newDestinationSub {
    newDestination {
        __typename
        id
        description
        cityId
        conditions {
            __typename
            description
            current
            maxTemp
            minTemp 
        }
    }
}`;

export default newDestinationSub;