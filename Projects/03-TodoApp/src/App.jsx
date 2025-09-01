import React from "react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
function App() {
  // This State For Get New Input Value
  const [input, setInput] = useState("");
  // This State For Previous State Value Store in Array
  const [tasks, setTask] = useState([]);
  // This State For Store index beacause This Is Aysnc
  const [editIndex, setEditIndex] = useState(null);
  let checked = {
    textDecoration: "line-through",
  };

  // Todo handleAdd
  const handleAddOrUpdate = () => {
    if (input.trim() === "") return alert("Your Tasks Input Is Empty");
    // Todo Add
    if (editIndex == null) {
      let exits = tasks.includes(input);
      if (exits) return alert("This all Ready Exits");
      setTask([...tasks, input]);
      setInput("");
    }
    // Todo Update
    else {
      let update = [...tasks];
      update[editIndex] = input;
      setTask(update);
      setInput("");
      setEditIndex(null); // Null because Set Defult and Edit Mope off
    }
  };
  // Todo handleDelete
  const handleDelete = (index) => {
    let deleteTasks = tasks.filter((_, i) => i != index);
    setTask(deleteTasks);
  };
  // Todo handleClearAll
  const handleClearAll = () => {
    setTask([]);
  };
  // Todo handleEdit
  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <>
      <header>
        <h1>📝 Todo App </h1>
        <input
          placeholder="Add Your Tasks"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button onClick={handleAddOrUpdate}>
          {editIndex === null ? "Add" : "Update"}
          {editIndex === null ? <IoAdd size={18} /> : <FaSave size={18} />}
        </button>
      </header>
      <footer className="">
        {tasks.map((e, i) => {
          return (
            <ul key={i} className="list">
              <input type="checkbox" />
              <li style={checked}>{e}</li>
              <FiEdit size={18} onClick={() => handleEdit(i)} />
              <MdDelete size={18} onClick={() => handleDelete(i)} />
            </ul>
          );
        })}
      </footer>
      <button type="" className="" onClick={handleClearAll}>
        Clear All
      </button>
    </>
  );
}

export default App;
