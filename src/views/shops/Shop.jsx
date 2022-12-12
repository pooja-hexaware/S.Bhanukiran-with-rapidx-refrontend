import React, { useEffect } from 'react'
import { SimpleCard } from 'components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    fetchShops
} from './store/shop.actions'
const toMenu=(storeId)=>{
    console.log(storeId);
}

const Shop = () => {
    const { shops } = useSelector((state) => state.shops)
    const loading = useSelector((state) => state.shops.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchShops());
    }, [dispatch])
   
  return (
      <div>
          <SimpleCard>
              <div style={{ textAlign: "center", fontSize: "40px" }}>
                  <h3>Good Food, Great Time</h3>
                  Our chef's at WiWi make delicious food selections every week-you pick, we cook and deliver
              </div>
          </SimpleCard>
          <div style={{ margin: 50 , display: 'flex'} }>
        {shops.map((shop)=>{
            return(
            
            <Card sx={{ maxWidth: 345 }} style={{margin:20}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={shop.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {shop.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shop.storeId}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{fontSize:20}}>
                        Items available:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shop.itemsavailable}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={toMenu(shop.storeId)}>Order</Button>
                </CardActions>
            </Card>
        
            )}
           
        )}  
         </div>
          
          
      </div>
  )
}

export default Shop;