import React, { Component ,useState,useEffect} from 'react';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../App.css'
import Middle from'./Middle'
import Navbar from './navbar'

import {useSelector,useDispatch} from 'react-redux'

function Foodlist (props) {

  const [price ,setPrice] = useState(0)
  const state = useSelector(state => state.data)
                      
        return (
                    <div >
                               <div className="center">
                                   <div className="centeralData"> <h1 >Enter Your Amount to Find the Best Food Around you</h1></div> 
                                         <FormControl style={stylej.inputbox} size="small" variant="outlined" >
                                            
                                               <OutlinedInput
                                                          id="outlined-adornment-amount"
                                                          // defaultValue={0}
                                                          value={price}
                                                          onChange={(e) =>setPrice(e.target.value)}
                                                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                          variant="outlined"
                                                          type="number"
                                                          style={{background:"white",}}
                                                           />
                                          </FormControl>
                                  
                                 </div>
                                 <Middle data={state} Price={price}/>
                                
            </div>
        )

    }


const stylej = {
  background: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    color: "white",
    width: "80%",
    backgroundImage: "white",
    marginTop: "10vh",
    marginBottom: "10vh",
    borderRadius: "20px",
  },
  inline: {
    display: "inline",
  },
  inputbox: {
    marginTop: "60px",
    marginBottom: "60px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
};
export default Foodlist;
