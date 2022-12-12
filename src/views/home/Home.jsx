import React, {useEffect} from 'react'
import { styled } from '@mui/system'
import { SimpleCard } from 'components'
import { useSelector } from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    fetchItems
} from './store/menu.actions'
import Toppings from './Toppings';

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))


const Home = () => {
    const { items } = useSelector((state) => state.items)
    const loading = useSelector((state) => state.items.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch])
    
    let [countFal,setCountFal]=React.useState(0);
    const increFal=()=>{
        countFal=countFal+1;
        setCountFal(countFal);
    }
    const decFal=()=>{
        countFal=countFal-1;
        setCountFal(countFal);
    }
    let [countVeg,setCountVeg]=React.useState(0);
    const increVeg=()=>{
        countVeg=countVeg+1;
        setCountVeg(countVeg);
        console.log('inside increVeg');
    }
    const decVeg=()=>{
        countVeg=countVeg-1;
        setCountVeg(countVeg);
        console.log('inside decVeg');
    }
    let [countHums,setCountHums]=React.useState(0);
    const increHums=()=>{
        countHums=countHums+1;
        setCountHums(countHums);
        console.log('inside increHums');
    }
    const decHums=()=>{
        countHums=countHums-1;
        setCountHums(countHums);
        console.log('inside decHums');
    }
    let [countDoub,setCountDoub]=React.useState(0);
    const increDoub=()=>{
        countDoub=countDoub+1;
        setCountDoub(countDoub);
        console.log('inside increDoub');
    }
    const decDoub=()=>{
        countDoub=countDoub-1;
        setCountDoub(countDoub);
        console.log('inside decDoub');
    }
    // const increment=(price)=>{
    //     if(price===22.99)
    //     {
    //         increVeg();
    //     }
    //     if(price===16.5)
    //     {
    //         increHums();
    //     }
    //     if(price===12.99)
    //     {
    //         increFal();
    //     }
    //     if(price===11.89)
    //     {
    //         increDoub();
    //     }
    // }
    // const decrement=(price)=>{
    //     if(price===22.99)
    //     {
    //         decVeg();
    //     }
    //     if(price===16.5)
    //     {
    //         decHums();
    //     }
    //     if(price===12.99)
    //     {
    //         decFal();
    //     }
    //     if(price===11.89)
    //     {
    //         decDoub();
    //     }
    // }

    const menuItems=(name)=>{
        

    }
    
    
    return (
        <Container style={{ margin: "10px" }}>
            <img style={{ width: 1700, height: 300 }} src="https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-food-spicy-and-seductive-lobster-shellfish-chinese-meal-background-image_6705.jpg" />
            
            {/* <div>
                <Typography style={{ fontFamily: "Verdana,sans-serif", color: "red", margin: "10px", fontSize: "35px" }}>Items Available</Typography>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ color: "blue", fontSize: "40px", fontFamily: "Snell Roundhand, cursive" }}>Loaded Veggie</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ marginBottom: "50px", fontSize: "20px" }}>
                            sweet potato, brown rice, pinto beans, green chilli queso,chitpotle mayo, corn pepper blend
                        </Typography>
                        <Stack spacing={3} direction="row">
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Amount: $22.99
                            </Typography>
                            <Button variant="contained" onClick={increVeg}>Add</Button>
                            <Button variant="contained" disabled={countVeg===0} onClick={decVeg}>Decrease</Button>
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Quantity:
                            </Typography>
                            <TextField id="outlined-basic" label="Count" type="number" variant="outlined" value={countVeg} />
                            <Button variant="contained">Add Toppings</Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ color: "blue", fontSize: "40px", fontFamily: "Snell Roundhand, cursive" }}>Hummus Falafel</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ marginBottom: "50px", fontSize: "20px" }}>
                            Falafel, cucumber salsa, spicy chimichurri, go-go sauce, roasted red pepper hummus, red onions, feta, pita chips
                        </Typography>
                        <Stack spacing={3} direction="row">
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Amount: $16.50
                            </Typography>
                            <Button variant="contained" onClick={increHums}>Add</Button>
                            <Button variant="contained" disabled={countHums===0} onClick={decHums}>Decrease</Button>
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Quantity:
                            </Typography>
                            <TextField id="outlined-basic" label="Count" type="number" variant="outlined" value={countHums} />
                            <Button variant="contained">Add Toppings</Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography style={{ color: "blue", fontSize: "40px", fontFamily: "Snell Roundhand, cursive" }}>Feta Falafel</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Typography style={{ marginBottom: "50px", fontSize: "20px" }}>
                            Falafel, green goddess dressing, lemon garlic vinaigrette,cucumber salsa, pickled red onion, tangy herb aioli, feta
                        </Typography>
                        <Stack spacing={3} direction="row">
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Amount: $12.99
                            </Typography>
                            <Button variant="contained" onClick={increFal}>Add</Button>
                            <Button variant="contained" disabled={countFal===0} onClick={decFal}>Decrease</Button>
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Quantity:
                            </Typography>
                            <TextField id="outlined-basic" label="Count" type="number" variant="outlined" value={countFal} />
                            <Button variant="contained">Add Toppings</Button>
                        </Stack>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{ color: "blue", fontSize: "40px", fontFamily: "Snell Roundhand, cursive" }}>Double Bagel</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{ marginBottom: "50px", fontSize: "20px" }}>
                            Double bagel, cheese, mustard sauce with broccoli and mashed potatoes sides
                        </Typography>
                        <Stack spacing={3} direction="row">
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Amount: $11.89
                            </Typography>
                            <Button variant="contained" onClick={increDoub}>Add</Button>
                            <Button variant="contained" disabled={countDoub===0} onClick={decDoub}>Decrease</Button>
                            <Typography style={{ fontSize: "20px", color: "blue" }}>
                                Quantity:
                            </Typography>
                            <TextField id="outlined-basic" label="Count" type="number" variant="outlined" value={countDoub} />
                            <Button variant="contained">Add Toppings</Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </div> */}
            <Typography style={{ fontFamily: "Verdana,sans-serif", color: "red", margin: "10px", fontSize: "35px" }}>Items Available</Typography>
            {items.map((item)=>{
                const name=item.name;
                return(
                    <div>
                        <Accordion disabled={menuItems(name)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "blue", fontSize: "40px", fontFamily: "Snell Roundhand, cursive" }}>{item.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ marginBottom: "50px", fontSize: "20px" }}>
                                    {item.ingredients}
                                </Typography>
                                <Stack spacing={3} direction="row">
                                    <Typography style={{ fontSize: "20px", color: "blue" }}>
                                        Amount: ${item.price}
                                    </Typography>
                                    <Typography style={{ fontSize: "20px", color: "blue" }}>
                                        Quantity:
                                    </Typography>
                                    <TextField id="outlined-basic" 
                                               label="Count" 
                                               type="number" 
                                               variant="outlined" 
                                               onInput = {(e) =>{
                                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
                                               }}
                                               />
                                    <Toppings prop={item.topnames}/>
                                    {/* <Button variant="contained">Add Toppings</Button> */}
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}

        </Container>
    );
}

export default Home;
