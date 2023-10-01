import React from 'react'
import { useOrdersContext } from '../../contexts/orderscontext'
import { Button } from '@mui/material'

export default function Submit() {
    const {addOrder} = useOrdersContext()
    const handleSubmit = (e) => {
        e.preventDefault();
        addOrder(e); 
      };
  return (
    <div>
        <Button onClick={handleSubmit} type='submit'>submit</Button>
    </div>
  )
}
