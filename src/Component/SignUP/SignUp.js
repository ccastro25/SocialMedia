import React, { Component } from 'react';
import {Grid} from '@mui/material'; // Grid version 1
import './SignUp.css';
import plata from "../../Images/plata.png";
import p from "../../Images/pp.png"
import { display, height } from '@mui/system';
import { UserAuth } from '../../Context/AuthContext'; 
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//import './App.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:null,
            fullName:null,
            userName:null,
            password:null,
            error:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
     handleChange(event){
        
        this.setState({emailOrNumber: event.target.emailOrNumber});
        this.setState({fullName: event.target.fullName});
        this.setState({userName: event.target.userName});
        this.setState({password: event.target.password});
    }

    handleSubmit = async (event) =>{
        const { createUser } = UserAuth();
        event.preventDefault();
        
        this.state.error= ''
        try{
            await createUser(this.state.email, this.state.password);
        } catch(e){
            this.state.error= e.message;
            console.log(this.state.error);
        }
        alert('A name was submitted: ' + this.state);

    }

    render(){
        return(
            <div>
                
                <Grid container >
                        <Grid  item xs={5}>
                            
                        </Grid>
                        <Grid className="MidGrid"  item xs={2}>
                           
                            <form className="singUpcontainer">
                                
                                            
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
                                            <input className='InputBox' name="emailOrNumber" required="true" type = "text" placeholder='Mobile Number or Email'
                                            onChange={(event)=>{this.state.emailOrNumber=event.currentTarget.value;}}
                                            />
                                            <input className='InputBox' name="fullName" required="true" type="text" placeholder='Full Name'
                                                onChange={(event)=>{this.state.fullName=event.currentTarget.value;}}
                                            />
                                            <input className='InputBox' name ="userName" required="true" type="text" placeholder='Username'
                                                onChange={(event)=>{this.state.userName=event.currentTarget.value;}}
                                            />
                                            <input className='InputBox' name="password" required={true} type ="password" aria-required="true"
                                                autoCapitalize="off" autoComplete="new-password" autoCorrect="off" placeholder='Password'
                                                onChange={(event)=>{this.state.password=event.currentTarget.value;}}   
                                                    />
                                        </div>
                                        <button className="SignUPButton" value="submit" onClick={this.handleSubmit} >
                                        Sign up  
                                        </button>
                                </div>

                                <div className='LoginContainer'>
                                   <p className='LoginText'> Have an account? <Link to='/'>Login</Link> </p>
                                </div>
                            </form>
                             
                        </Grid>
                        <Grid   item xs={5}>
                            
                        </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default SignUp;