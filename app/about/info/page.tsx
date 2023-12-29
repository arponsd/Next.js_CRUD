import Link from 'next/link'
import React from 'react'

const infoPage = () => {
  return (
    <div>
        <p className='text-7xl'>Info Page</p>
        <Link href='/'
            className='text-xl py-2 px-4 bg-blue-600 text-white rounded-lg'
            >Home Page</Link>
            <Link href='/about'
            className='text-xl py-2 px-4 bg-blue-600 text-white rounded-lg'
            >About</Link>
    </div>
  )
}

export default infoPage