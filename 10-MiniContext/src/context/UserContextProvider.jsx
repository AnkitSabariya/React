import React, { Children, useState } from "react";
import { FormContext } from "./UserContext";
// 2 Create.Provider For Data provider in Components access Data
function UserContextProvider({ children }) {
  let [data, setData] = useState(""); // hared state || Api call
  return (
    // access Api data from all value = {}
    <FormContext.Provider value={{ data, setData }}>
      {children} {/* children = Login, Display etc */}
    </FormContext.Provider>
  );
}

export default UserContextProvider;
