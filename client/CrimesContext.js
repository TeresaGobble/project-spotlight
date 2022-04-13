import { createContext, useState } from "react";

const CrimesContext = createContext(); //setting CrimesContext as the context

const CrimesContextProvider = (props) => { //this acts as the wrapper for the components who must use the same state (essentially as a customized global scope, since all the children and children's children should be able to access this correctly without drilling- fingers crossed)

  const [Crimes, setCrimes] = useState(["no crimes are here yet"]);

  // app.get("/searched", (request, response) => {
  //   const { location, crime, crimeSubcategory, date } = request.query;
  //   getSearchedCrime({ location, crime, crimeSubcategory, date })
  //     .then((crimeResults) => {
  //       response.send(crimeResults);
  //     })
  //     .catch((error) => {
  //       response.status(500).send(error);
  //     })
  // });

  const CrimesProviderValue = {
    crimes: crimes,
    setCrimes: setCrimes
  }

  return {
    < CrimesContext.Provider value = { CrimesProviderValue } >
    { props.children }
    </CrimesContext.Provider >
  }
}

export default { CrimesContext, CrimesContextProvider }
