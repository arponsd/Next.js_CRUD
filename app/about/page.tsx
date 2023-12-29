import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <p className='text-7xl'>About page</p>
            <Link href='/' className='text-2xl'>Home page</Link>
        </div>
    )
}

export default About