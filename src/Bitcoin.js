import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CoinList= [
    {id:1,name:"bitcoin",price : "290000k"},
    {id:2,name:"riple", price : "500k"},
    {id:3,name:"mineral", price : "2500k"},
    {id:4,name:"uniswap", price : "12500k"},
]

function CoinView({name,price}){
    
    return(
        <div>
        <h1>Coin Name:{name}</h1>
        <h2>Current Price: {price}</h2>
        </div>
    )
}

CoinView.propTypes={
    name:PropTypes.string,
    price:PropTypes.string,
}

function Bitcoin(){
    return(
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {/* {CoinList.map((item,index)=><CoinView key={item.id} name={item.name} price={item.price} />)} */}
        {CoinList.map((item,index)=> 
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item>{item.name} : {item.price} </Item>
        </Grid>
        )}
        
        
        </Grid>
    </div>)
}

export default Bitcoin;
