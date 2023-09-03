import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { pink } from '@mui/material/colors';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from '../assets/styles/mui.module.css'

export default function CustomCard({img,role,updateitem,selected}) {
  return (
    <Card sx={{ maxWidth: 530, transition:"1s ease" }} className={selected?styles.card:null} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
        <Button size="small" color="primary">
          Book Now
        </Button>
        <Fab size="small" color="primary" aria-label="add" sx={{mr:3}} onClick={updateitem}>
          {selected?(<RemoveIcon sx={{ color: pink[500] }}/>):(<AddIcon />)}
        </Fab>
      </CardActions>
    </Card>
  );
}