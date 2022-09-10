import React from 'react'

const User=({user ,changeColor})=> {
  return (
    <div style={{background:user.color}}>
        <h3>Name :{user.name}</h3>
        <p>Email :{user.email}</p>
        <p>Age :{user.age}</p>
        Color={''}
        <input value={user.color} onChange={e=>changeColor(user.id,e.target.value)}/>
    </div>
  )
}

export default User