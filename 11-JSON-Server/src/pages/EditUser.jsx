import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    gender: "",
  });
  const { userid } = useParams();
const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [userid]);

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/users/${userid}`)
      .then((res) => {
        const { name, age, email, city, gender } = res.data;
        setForm({ name, age, email, city, gender });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
     axios
      .put(`http://localhost:3000/users/${userid}`,form)
      .then(() => {
      alert("Update SuccessFully")
      navigate("/")

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit User {userid}</h2>
      <form onSubmit={handleUpdate}>
        <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <label>User Name</label>
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder=" "
            value={form.age}
            min={1}
            max={100}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />
          <label>Age</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder=" "
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
          />
          <label>City</label>
        </div>

        <div className="gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={() => setForm({ ...form, gender: "male" })}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={() => setForm({ ...form, gender: "female" })}
            />
            Female
          </label>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
