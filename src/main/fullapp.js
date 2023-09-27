import React from 'react'
import Lab from './Lab'
import Booking from '../pages/booking'
import { Routes,Route } from 'react-router-dom'
import { FormProvider } from '../contexts/FormContext'
import { MenuProvider } from '../contexts/accountmenucontext.js'

export default function FullApp() {

  return (
    <div>
      <MenuProvider>
      <FormProvider>
          <Routes>
              <Route path="/" element={<Lab/>}/>
              <Route path="booking/*" element={<Booking/>}/>
          </Routes>
      </FormProvider>
      </MenuProvider>     
    </div>
  )
}
