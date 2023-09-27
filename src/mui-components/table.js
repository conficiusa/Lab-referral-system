import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { DeleteOutlineSharp } from '@mui/icons-material';
import { useOrdersContext } from '../contexts/orderscontext';
import AlertDialogSlide from './dialog';

function ControlledCheckbox({ order }) {
  const {  setOrders } = useOrdersContext();

  const handleChange = () => {
    setOrders((prevOrders) => {
      const updatedOrders = { ...prevOrders };
      const updatedOrder = {
        ...order,
        checked: !order.checked, // Toggle the checked state
      };
      updatedOrders.pending = updatedOrders.pending.map((o) =>
        o.orderId === order.orderId ? updatedOrder : o
      );
      return updatedOrders;
    });
  };
  return (
    <Checkbox
      checked={order.checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      size="small"
    />
  );
}


function Row({ order, status }) {
  const [open, setOpen] = React.useState(false);
  const { deleteOrder } = useOrdersContext();

  let color = "#2192cd";
  switch (status) {
    case "pending":
      color = "#ffbb55";
      break;
    case "fulfilled":
      color = "#41f1b6";
      break;
    case "cancelled":
      color = "#2192cd";
      break;
    default:
      color = "#2192cd";
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.orderId}
        </TableCell>
        <TableCell align="center">{order.name}</TableCell>
        <TableCell align="center">{order.orderTime}</TableCell>
        <TableCell align="center" sx={{ color: color }}>{status}</TableCell>
        <TableCell align="center">
          <Button sx={{ fontSize: "10px", textDecoration: "underline" }} onClick={() => setOpen(!open)}>Details</Button>
        </TableCell>
        <TableCell align="center">
          {status === "pending" ? <ControlledCheckbox order={order} /> : <IconButton onClick={() => deleteOrder(order.orderId)} dialogType="delete"><DeleteOutlineSharp sx={{ color: "red" }} /></IconButton>}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="large" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">
                        {Math.round(historyRow.amount * order.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ orderType, status }) {
  const [open, setOpen] = React.useState(false);
  const { orders, markOrderAsCompleted, cancelOrders } = useOrdersContext();
 
  const handleActionsClick = ()=>{
    setOpen(true)
  }
  const selectedOrders = orders.pending.filter((order) => order.checked);

  const handleMarkAsCompleted = () => {
    selectedOrders.forEach((order) => {
      markOrderAsCompleted(order.orderId);
    });
  };
  const handlecancelOrders = () => {
    selectedOrders.forEach((order) => {
      cancelOrders(order.orderId);
    });
  };

  return (
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 600 }}>Order ID</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>Time of Order</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>Status</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              {selectedOrders.length >0 && status ==="pending" && (<Button variant="outlined" onClick={handleActionsClick} size='small'>Actions</Button>)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderType.map((order) => (
            <Row
              key={order.orderId}
              order={order}
              status={status}
              orderType={orderType}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AlertDialogSlide open={open}  setOpen={setOpen} handleMarkAsCompleted={handleMarkAsCompleted}  handlecancelOrders={ handlecancelOrders} dialogType="actions"/>
    </div>
  );
}
