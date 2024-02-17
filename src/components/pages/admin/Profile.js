import React from 'react'
import ProfileCard from '../../elements/ProfileCard'
import UpcomingReservations from '../../elements/UpcomingReservations'

const AdminProfile = () => {
  return (
    <div >
        <h1>Admin Profile</h1>
        <ProfileCard />
        <UpcomingReservations />
    </div>
  )
}

export default AdminProfile

