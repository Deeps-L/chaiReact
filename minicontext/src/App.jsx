import { useState } from 'react'

import './App.css'
import UserContextProvider from './assets/Context/UserContextProvider'
import Login from './assets/Components/Login'
import Profile from './assets/Components/Profile'

 function App() {
  return (
    <UserContextProvider>
      
      <Login />
      <Profile />
      
      
    </UserContextProvider>
  )
}

export default App
