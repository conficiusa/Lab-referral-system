import React from 'react'
import Lab from './Lab'
import Booking from '../pages/booking'
import { Routes,Route } from 'react-router-dom'
import { FormProvider } from '../contexts/FormContext'

export default function FullApp() {

  return (
    <div>
      <FormProvider>
          <Routes>
              <Route path="/" element={<Lab/>}/>
              <Route path="booking/*" element={<Booking/>}/>
          </Routes>
      </FormProvider>     
    </div>
  )
}
