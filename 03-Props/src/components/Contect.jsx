import React from "react";

function Contect({names,emails,active}) {
  return (
    <center>
      <div>Name : {names}</div>
      <div>Email : {emails}</div>
      <div>Avilable : {active}</div>
      <br/>
      
    </center>
  );
}

export default Contect;
