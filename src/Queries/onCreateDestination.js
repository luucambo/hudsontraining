const onCreateDestination =/* GraphQL */`
subscription newDestinationSub {
    newDestination {
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
}`;

export default onCreateDestination;