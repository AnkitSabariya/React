import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
        console.log("Delete Data", res.data);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
   <div className="container">
  <div className="table-header">
    <div>ID</div>
    <div>Name</div>
    <div>Age</div>
    <div>Email</div>
    <div>City</div>
    <div>Gender</div>
    <div>Action</div>
  </div>

  {!loading ? (
    data.map((e) => (
      <div className="table-row" key={e.id}>
        <div>{e.id}</div>
        <div>{e.name}</div>
        <div>{e.age}</div>
        <div>{e.email}</div>
        <div>{e.city}</div>
        <div>{e.gender}</div>
        <div className="actions">
          <button className="edit" onClick={() => navigate(`/edit/${e.id}`)}>Edit</button>
          <button className="delete" onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      </div>
    ))
  ) : (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  )}
</div>

  );
}

export default Users;
