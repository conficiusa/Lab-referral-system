import React from 'react'
import Lab from './Lab'
import Booking from '../pages/booking'
import { Routes,Route } from 'react-router-dom'


export default function FullApp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Lab/>}/>
            <Route path="booking/*" element={<Booking/>}/>
        </Routes>
    </div>
  )
}
