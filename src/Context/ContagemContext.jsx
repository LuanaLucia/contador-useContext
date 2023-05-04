import React from "react";

const ContagemContext = React.createContext({
    contagem:0,
    setContagem: () => {} //arrow function
});


export default ContagemContext;
