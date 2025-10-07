import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/db";
import { toast } from "react-toastify";
function StudentAdmin() {
  const [loading, setloading] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });
  const { name, age, course, city } = student;
  const handleAdd = async (e) => {
    e.preventDefault();
    if (name.trim() !== "" && age && course && city) {
      setloading(true);
      // 1. FireStore Database
      try {
        const docRef = await addDoc(collection(db, "Students"), {
          name,
          age,
          course,
          city,
        });
        toast.success("Document written with ID: " + docRef.id, {
          draggable: true,
        });
        console.log("Document written with ID: ", docRef.id);
        setStudent({ name: "", age: "", course: "", city: "" });
      } catch (e) {
        console.error("Error adding document: ", e);
      } finally {
        setloading(false);
      }
    } else {
      toast.error("Please fill all fields correctly", {
        draggable: true,
      });
    }
  };
  return (
    <div>
      <div className="student-admin-container">
        <div className="container">
          <header>
            <h1>🎓 Student Management</h1>
            <p>Manage and Add student Easily</p>
          </header>

          <section className="form-section">
            <h2>Add New Student</h2>
            <form onSubmit={handleAdd} >
              <div className="input-group">
                <input
                  value={name}
                  type="text"
                  onChange={(e) =>
                    setStudent({ ...student, name: e.target.value })
                  }
                  name="name"
                  placeholder=" "
                />
                <label>Full Name</label>
              </div>

              <div className="input-group">
                <input
                  type="number"
                  value={age}
                  onChange={(e) =>
                    setStudent({ ...student, age: e.target.value })
                  }
                  name="age"
                  placeholder=" "
                />
                <label>Age</label>
              </div>

              <div className="input-group">
                <select
                  value={course}
                  name="course"
                  onChange={(e) =>
                    setStudent({ ...student, course: e.target.value })
                  }
                  defaultValue=""
                >
                  <option value="" disabled hidden>Select Course </option>
                  <option value="Full Stack">Full Stack Devlopment</option>
                  <option value="Full Stack">Flutter </option>
                  <option value="Android">Android & iOS Devlopment</option>
                  <option value="Graphic Design">UI-UX & Graphic Design</option>
                  <option value="AI">AI & ML</option>
                </select>
                <label>Course</label>
              </div>

              <div className="input-group">
                <input
                  value={city}
                  type="text"
                  onChange={(e) =>
                    setStudent({ ...student, city: e.target.value })
                  }
                  name="city"
                  placeholder=" "
                />
                <label>City</label>
              </div>

              <button type="submit" className="btn">
                {loading ? "Adding..." : "Add Student"}
              </button>
            </form>
          </section>

          <footer>
            <p>© 2025 Red & White Technology | Designed for School Projects</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default StudentAdmin;
