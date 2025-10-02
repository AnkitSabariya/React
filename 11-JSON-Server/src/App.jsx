import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="table-header">
        <div>Name</div>
        <div>Age</div>
        <div>Email</div>
        <div>City</div>
        <div>Gender</div>
      </div>

      {!loading ? (
        data.map((e, i) => (
          <div className="table-row" key={i}>
            <div>{e.name}</div>
            <div>{e.age}</div>
            <div>{e.email}</div>
            <div>{e.city}</div>
            <div>{e.isMale ? "Male" : "Female"}</div>
          </div>
        ))
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
}

export default App;
