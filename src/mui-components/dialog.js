import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useOrdersContext } from '../contexts/orderscontext';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open,setOpen,handleMarkAsCompleted, handlecancelOrders,dialogType}) {
    const { orders } = useOrdersContext();

  const handleCompleted = () => {
    handleMarkAsCompleted()
    setOpen(false);
  };
  const handleorderCancel = () => {
     handlecancelOrders()
    setOpen(false);
    console.log(orders.canceled)
  };
  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogType === "action" ? "Take Action" : "Delete Items"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"  sx={{fontWeight:600,}}>
          {dialogType === "action" ? " what actions would you like to take on the selected orders" : "Are you sure you want to delete these items"}
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCompleted} sx={{fontWeight:500, color:"#41f1b6"}}>Mark as completed</Button>
          <Button onClick={handleorderCancel} sx={{fontWeight:500, color:"#ff7782"}}>Cancel Order</Button>
          <Button onClick={handleClose} sx={{fontWeight:500}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}