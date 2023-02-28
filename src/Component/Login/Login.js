import React, { useState } from 'react';
import {Grid} from '@mui/material';
import "./Login.css"
import plata from "../../Images/plata.png";
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login  =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { signIn } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await signIn(email, password);
          navigate('/maincontent')
        } catch (e) {
          setError(e.message);
          console.log(e.message);
        }
      };

    
        return(
            <div>



        <Grid container >
                        <Grid  item xs={5}></Grid>
                        <Grid className='grid1'  item xs={2}>

                       
                        <form className='LogIncontainer'>
                       

                        
                                <div className='LogInInnerContianer'>
                                <img  className='PlataSign' src={plata} style={{height:80 }}/>
                                    <input className='InputBox' name="email" required={true}  type = "text" placeholder=' Email'
                                          onChange={(e) => setEmail(e.target.value)}/>

                                    <input className='InputBox' name="password" required={true} type ="password" aria-required="true"
                                            autoCapitalize="off" autoComplete="new-password" autoCorrect="off" placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}/>
                                    
                                    <button className="SignUPButton"  onClick= {handleSubmit}>
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
                               
                                
                        </form>
                        
                        </Grid>
                        <Grid   item xs={5}></Grid>


        </Grid>
            </div>
        );
        }

export default Login;