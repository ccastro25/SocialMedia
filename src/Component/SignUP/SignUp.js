import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Grid} from '@mui/material'; // Grid version 1
import './SignUp.css';
import plata from "../../Images/plata.png";
import p from "../../Images/pp.png"
import { display, height } from '@mui/system';
import { UserAuth } from '../../Context/AuthContext'; 
import Button from '@mui/material/Button';

//import './App.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        await createUser(email, password);
        navigate('/')
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    };
  
    return (

      <div>
                
                <Grid container >
                        <Grid  item xs={5}>
                            
                        </Grid>
                        <Grid className="MidGrid"  item xs={2}>
                           
                            <form className="singUpcontainer" >
                                
                                            
                            <div  className="singUpInnerContianer"  >
                                    <img  className='PlataSign' src={plata} style={{height:80 }}/>
        

                                    <h2 className='signUpText'>Sign up to see photos and videos from your friends.</h2>
                                
                                    <button className="loginWithFaceBookButton" >
                                    <span className='Logo'>P</span> Login with FaceBook
                                    </button>
                                    <div className='OrContainer'>
                                    <div className='OrLines'></div><div className='OrLetters'>OR</div><div className='OrLines'></div>
                                    </div>
                                    <div className='InputFields'>
                                        <input className='InputBox' name="email" required={true}  type = "text" placeholder=' Email'
                                          onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input className='InputBox' name="fullName" required={true}  type="text" placeholder='Full Name'
                                            
                                        />
                                        <input className='InputBox' name ="userName" required={true}  type="text" placeholder='Username'
                                           
                                        />
                                        <input className='InputBox' name="password" required={true} type ="password" aria-required="true"
                                            autoCapitalize="off" autoComplete="new-password" autoCorrect="off" placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                                />
                                    </div>
                                    <button className="SignUPButton" type="submit" onClick={handleSubmit} >
                                    Sign up  
                                    </button>
                            </div>

                                <div className='LoginContainer'>
                                   <p className='LoginText'> Have an account? Login </p>
                                </div>
                                </form>
                             
                        </Grid>
                        <Grid   item xs={5}>
                            
                        </Grid>
                    
                </Grid>
            </div>

    );
  };
  
  export default Signup;

