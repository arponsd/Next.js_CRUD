"use client"
import React, { useState } from 'react'



const Client = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count +1);
  }
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default Client