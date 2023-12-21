import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

export default function Seconnectrer() {
  return (
    <>
    <NavLink to={"Mon compte"}>Mon compte</NavLink>
    <Routes>
        <Route path='Mon compte' element={<Seconnectrer></Seconnectrer>}></Route>
    </Routes>
    </>
  )
}
