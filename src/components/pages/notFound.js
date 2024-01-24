//src/components/pages/notFound.js
import React from 'react'
import {Link} from 'react-router-dom'

export default function notFound() {
  return (
    <div className='notFound'>
        <h1>Can't find the page you are looking for.</h1>
        <Link to="/">Home</Link>
    </div>
  )
}
