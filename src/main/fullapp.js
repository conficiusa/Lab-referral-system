import React from 'react'
import Lab from './Lab'
import Booking from '../pages/booking'
import { Routes,Route } from 'react-router-dom'
import { FormProvider } from '../contexts/FormContext'
import { MenuProvider } from '../contexts/accountmenucontext.js'
import { DataProvider } from '../contexts/ordersshapecontext'
import { OrdersProvider } from '../contexts/orderscontext'

export default function FullApp() {

  return (
    <div>
      <DataProvider>
      <FormProvider>
      <OrdersProvider>
      <MenuProvider>
          <Routes>
              <Route path="/" element={<Lab/>}/>
              <Route path="booking/*" element={<Booking/>}/>
          </Routes> 
      </MenuProvider>    
      </OrdersProvider>
      </FormProvider>
      </DataProvider>


    </div>
  )
}
