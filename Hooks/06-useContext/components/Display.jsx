import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context';
import Button from './Button';

function Display() {
  const value = useContext(counterContext)
  return (
    <>
    <span>Display {value.count}</span> <br/>
    <Button/>
    </>
  )
}

export default Display