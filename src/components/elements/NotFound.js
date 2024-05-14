
import React from 'react'
import {Link} from 'react-router-dom'
import '../../global.css'

const NotFound = () => {
  
  return (
    <div className='notFound'>
        <h1>Can't find the page you are looking for.</h1>
        <Link to="/"> Go Back Home</Link>
    </div>
  )
}

export default NotFound;
