import React from "react";
export const FormContext = React.createContext()

// 1 Create Context(mins : Global Container Hold All Data)
// FormContext ek object hai jo Provider aur Consumer dono provide karta hai.
// Provider state share karega, aur Consumer (ya useContext) state read/update karega.