import React, { useState } from "react";
import axios from "axios";

function AddUser() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    //  POST request
    axios
      .post("http://localhost:3000/users", form)
      .then((res) => console.log("User added:", res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
