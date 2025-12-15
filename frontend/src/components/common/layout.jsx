import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>

      <div className='d-flex'>
          <div><Navbar /></div>
          <div>
        <div > 
           <div> <Header /></div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout