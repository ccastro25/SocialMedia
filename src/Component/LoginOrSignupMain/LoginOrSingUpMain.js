import React,{Component} from "react";
import Login from "../Login/Login";
import MainContent from "../MainContent/MainContent";
import Register from "../SignUP/Register";
import SignUp from "../SignUP/SignUp";
import SigningUp from "../SignUP/SigningUp";
import { Route, Routes } from "react-router-dom";


class LoginOrSignUpMain extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
               {/*<MainContent/>*/}
              {/*  <SignUp/> */ } 
               
               <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path ="/maincontent" element={<MainContent/>}/>


               </Routes>
               
              <Login/>
              
            </div>
        );
    }
}

export default LoginOrSignUpMain;