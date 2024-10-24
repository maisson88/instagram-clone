import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AutPage/AuthPage'
import PageLayout from './Layout/PageLayout/PageLayout'
import ProfilePage from './Pages/ProfiePage/ProfilePage'
import useAuthStore from './store/AuthStore'

function App() {
  const authUser=useAuthStore(state=>state.user)

  return (
    <>
    <PageLayout>
<Routes>
  <Route path='/' element={authUser?<HomePage/>:<Navigate to='/auth'/>}/>
  <Route path='/auth' element={!authUser?<AuthPage/>:<Navigate to={'/'}/>}/>
  <Route path='/:username' element={<ProfilePage/>}/>
</Routes>
</PageLayout>
    </>
  )
}

export default App
