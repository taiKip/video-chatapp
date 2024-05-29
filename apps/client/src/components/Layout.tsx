import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
      <div className='min-h-full'>
        <NavBar/>
          <div>
              <Outlet/>
          </div>
          <div>Footer</div>
    </div>
  )
}

export default Layout