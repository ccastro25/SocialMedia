import React,{Component} from "react";
import Login from "../Login/Login";
import MainContent from "../MainContent/MainContent";
import Register from "../SignUP/Register";
import SignUp from "../SignUP/SignUp";


class LoginOrSignUpMain extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
               {/*<MainContent/>*/}
              {/*<Login/>*/ } 
               <SignUp/> 

               <Register/>
            </div>
        );
    }
}

export default LoginOrSignUpMain;