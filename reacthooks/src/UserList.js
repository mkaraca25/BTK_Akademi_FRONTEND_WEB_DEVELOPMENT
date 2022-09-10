import React from 'react'
import User from './User'

const UserList = ({users,changeColor})=> {
  return (
    <>
        <h2>User List</h2>
        {users.map(user =>(< User key={user.name} user={user} changeColor={changeColor}/>))}
    </>
    
  )
}

export default UserList