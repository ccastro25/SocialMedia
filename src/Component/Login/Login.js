import React, { Component } from 'react';
import {Grid} from '@mui/material';
import "./Login.css"
import plata from "../../Images/plata.png";
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>



        <Grid container >
                        <Grid  item xs={5}></Grid>
                        <Grid className='grid1'  item xs={2}>

                       
                        <div className='LogIncontainer'>
                       

                        
                                <div className='LogInInnerContianer'>
                                <img  className='PlataSign' src={plata} style={{height:80 }}/>
                                    <input className='InputBox' placeholder='Mobile Number or Email'/>
                                    <input className='InputBox' placeholder='Full Name'/>
                                    
                                    <button className="SignUPButton" >
                                 Log in  
                                </button>
                                <div className='OrContainer'>
                                <div className='OrLines'></div><div className='OrLetters'>OR</div><div className='OrLines'></div>
                               
                                </div>
                                <p className='LoginWithFacebook'> <span className='Logo'>P</span> Log in with FaceBook</p>
                                </div>
                                
                                <div className='SignUP'>
                                   <p className ='SignUpText'> Dont have account? <span className='singupWord'> <Link to='/signup'>Sing up</Link> </span> </p>
                                </div>
                               
                                
                        </div>
                        
                        </Grid>
                        <Grid   item xs={5}></Grid>


        </Grid>
            </div>
        );
    }
}

export default Login;