import React from 'react'

export const Admin = ({Current_user}) => {
  return (
   Current_user === 'admin' ?
    <div>Admin</div>
    : <div>You are not authorized</div>
  )
}
