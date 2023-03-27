import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'

export const AppRoutes = () => {
  return (
   

        <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="Pagina2" element={<Page2/>} />
            </Routes>
            
  )
}
