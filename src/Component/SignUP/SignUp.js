import React, { Component } from 'react';
import {Grid} from '@mui/material'; // Grid version 1
import './SignUp.css';
import plata from "../../Images/plata.png";
import p from "../../Images/pp.png"
import { display, height } from '@mui/system';

import Button from '@mui/material/Button';
//import './App.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                
                <Grid container >
                        <Grid  item xs={4}>
                            aa
                        </Grid>
                        <Grid   item xs={4}>
                           
                            <div className="singUpcontainer">
                                
                                            
                                <div  className="singUpInnerContianer">
                                <img  className='PlataSign' src={plata} style={{height:80 }}/>
     

                            <h2 className='signUpText'>Sign up to see photos and videos from your friends.</h2>
                           
                            <button className="loginWithFaceBookButton" >
                                <span className='Logo'>P</span> Login with FaceBook
                                </button>
                                <div className='OrContainer'>
                                <div className='OrLines'></div><div className='OrLetters'>OR</div><div className='OrLines'></div>
                                </div>
                                <div className='InputFields'>
                                    <input className='InputBox' placeholder='Mobile Number or Email'/>
                                    <input className='InputBox' placeholder='Full Name'/>
                                    <input className='InputBox' placeholder='Username'/>
                                    <input className='InputBox' placeholder='Password'/>
                                </div>
                                <button className="SignUPButton" >
                                 Sign up  
                                </button>
                                </div>
                                <div className='LoginContainer'>
                                   <p className='LoginText'> Have an account? Login </p>
                                </div>
                                </div>
                             
                        </Grid>
                        <Grid   item xs={4}>
                            
                        </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default SignUp;