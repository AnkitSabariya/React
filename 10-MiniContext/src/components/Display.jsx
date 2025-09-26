import React, { useContext } from 'react'
import { FormContext } from '../context/UserContext'

function Display() {
  const {data} = useContext(FormContext) // read context
  if (!data) return <div >Please Login</div>
  return (
    <div>Welcome Back
      <h3 className="">{data.name}</h3>
      <h3 className="">{data.password}</h3>
    </div>
  )
}

export default Display