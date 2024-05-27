import React from 'react'
import { useGetUsersQuery } from './userSlice'

const UsersPage = () => {
    const { data } = useGetUsersQuery();
    console.log(data)
  return (
      <ul>
          {data && data.map(user => <li key={user.username}>{ user.username}</li>)} 
   </ul>
  )
}

export default UsersPage