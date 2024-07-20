import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

export default function Boiler() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}
