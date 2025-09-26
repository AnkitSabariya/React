import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

function Button() {
  const value = useContext(counterContext)
  return (
  <button type="" className="" onClick={()=>value.setCount(value.count + 1)}>Button{value.count}</button>
  )
}

export default Button