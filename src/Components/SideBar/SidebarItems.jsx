import React from 'react'
import Home from './Home'
import Notification from './Notification'
import Create from './Create'
import Profile from './Profile'
import Serarch from './Serarch'

function SidebarItems() {
  return (
   <>
   <Home/>
   <Serarch/>
   <Notification/>
   <Create/>
   <Profile/>
   </>
  )
}

export default SidebarItems
