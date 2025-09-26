import React, { useState, useContext } from "react";
import { FormContext } from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassWord] = useState("");
  const { setData } = useContext(FormContext); // consume context
  const handleSubmit = () => {
    setData({ name, password }); // update shared state
  };
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Display Name"
      />
      {"   "}
      <input
        type="text"
        name="name"
        onChange={(e) => setPassWord(e.target.value)}
        placeholder="Display Password"
      />
       {"               "}
      <button type="" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
