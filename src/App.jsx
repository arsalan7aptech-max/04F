import React from 'react'
import Home from '../src/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import DashboardHome from './pages/dashboard/DashboardHome'
import DashboardLayout from './layout/DashboardLayout'
import DashboardContact from './pages/dashboard/DashboardContact'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='contact' element={<DashboardContact />} />


        </Route>
      </Routes>
      {/* <Home/> */}
    </>
  )
}

export default App