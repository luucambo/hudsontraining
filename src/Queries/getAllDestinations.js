const getAllDestinations =`
query getAllDestinations{
  getAllDestinations {
    description
    cityId
    id
    conditions {
      maxTemp
      description
      current
      minTemp
    }
  }
  }`;

  export default getAllDestinations;
