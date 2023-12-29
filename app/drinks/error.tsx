"use client"
import React from 'react'

const error = (error: any) => {
    console.log(error);
  return (
    // <span className=''> There was an error...</span>
    <div className="">{error.error.message}</div>
  )
}

export default error