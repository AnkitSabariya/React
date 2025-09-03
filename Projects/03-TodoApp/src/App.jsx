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

  // Todo handleInput
  const handleInput = (value) => {
    setInput(value);
  };

  // Todo handleAdd
  const handleAddOrUpdate = () => {
    if (input.trim() === "") return alert("Your Tasks Input Is Empty");

    // Check for duplicate task only when adding
    let exits = tasks.some((task) => task.text === input);
    if (exits && editIndex === null) return alert("This all Ready Exits");

    // Todo Add
    if (editIndex == null) {
      setTask([...tasks, { id: Date.now(), text: input, complated: false }]);
      setInput("");
    }
    // Todo Update
    else {
      let update = [...tasks];
      update[editIndex] = { ...update[editIndex], text: input };
      setTask(update);
      setInput("");
      setEditIndex(null); // Null because Set Defult and Edit Mope off
    }
  };
  localStorage.setItem("data",JSON.stringify(tasks))

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
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  // Todo handlecheck
  const handleCheck = (id) => {
    let checkedTask = tasks.map((e) =>
      e.id === id ? { ...e, complated: !e.complated } : e
    );
    setTask(checkedTask);
  };

    const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddOrUpdate();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 Todo App</h1>
        <div className="input-container">
          <input
            placeholder="Add Your Tasks"
            onChange={(e) => handleInput(e.target.value)}
            onKeyPress={handleKeyPress}
            value={input}
            maxLength={60}
          />
          <button onClick={handleAddOrUpdate} className="add-btn">
            {editIndex === null ? (
              <>
                Add <IoAdd size={18} />
              </>
            ) : (
              <>
                Update <FaSave size={18} />
              </>
            )}
          </button>
        </div>
      </header>

      <main className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet. Add some tasks </p>
          </div>
        ) : (
          <ul className="tasks-list">
            {tasks.map((e, i) => {
              return (
                <li key={e.id} className="task-item">
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={e.completed}
                      onChange={() => handleCheck(e.id)}
                      className="task-checkbox"
                    />
                    <span
                      className="task-text"
                      style={{
                        textDecoration: e.completed ? "line-through" : "none",
                        opacity: e.completed ? 0.7 : 1,
                      }}
                    >
                      {e.text}
                    </span>
                  </div>
                  <div className="task-actions">
                    <button 
                      onClick={() => handleEdit(i)} 
                      className="action-btn edit-btn"
                      aria-label="Edit task"
                    >
                      <FiEdit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(i)} 
                      className="action-btn delete-btn"
                      aria-label="Delete task"
                    >
                      <MdDelete size={16} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </main>

   
        <footer className="app-footer">
          <button onClick={handleClearAll} className="clear-all-btn">
            Clear All
          </button>
          <div className="progress">
            Completed: {tasks.filter((t) => t.complated).length} / {tasks.length}
          </div>
        </footer>
 
    </div>
  );
}

export default App;