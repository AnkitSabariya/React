import React from 'react'
import StudentAdmin from './pages/StudentAdmin'
import "./App.css"
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <StudentAdmin/>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App