import React,{Component} from "react";
import Login from "../Login/Login";
import MainContent from "../MainContent/MainContent";
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
            </div>
        );
    }
}

export default LoginOrSignUpMain;