import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Products from './components/Products'
import ContactUs from './components/ContactUs'
import Home from './components/Home'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path ="/" element={<Login />} />
<Route path ="/home" element={<Home />} />
<Route path ="/prd" element={<Products />} />
<Route path ="/cont" element={<ContactUs />} />

</Routes>


</BrowserRouter>






    </div>
  )
}
