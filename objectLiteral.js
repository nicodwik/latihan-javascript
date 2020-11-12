const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 