//src/components/pages/users.js

import React, { useState, useEffect } from 'react' 


function Users() {

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch('/api/auth/users')
      .then(res => res.json())
      .then(data => {
        setBackendData(data.users)
      })
  }
  , [])

  return (
    <div>
      <div>
      <h1>Users</h1>
      <ul>
        {backendData.map(user => (
          <li key={user.id}> 
           (ID:{user.id}) ({user.FirstName}) ({user.LastName}) ({user.EmailAddress})
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}


export default Users;
