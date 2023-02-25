import {useRef, useState, useEffect, Component} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";
import { async } from "@firebase/util";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            validName:false,
            userFocus:false,
            pwd:'',
            validPwd:false,
            pwdFocus:false,
            matchPwd:'',
            validMatch:false,
            matchFocus:false,
            errMsg:'',
            success:false
        }
     /*
     let userRef = userRef();
     errRef  = userRef();

     [user, setUser] = useEffect();
   
  
     [validName, setValidName] = useState(false);
     [userFocus, setUserFocus] = useState(false);

     [pwd, setPwd] = useState('');
     [validPwd, setValidPwd] = useState(false);
     [pwdFocus, setPwdFocus] = useState(false);

     [matchPwd , setMatchPwd] = useState("");
     [validMatch, setValidMatch] = useState(false);
     [matchFocus, setMatchFocus] = useState(false);

     [errMsg, setErrMsg] = useState("");
     [success, setSuccess] = useState(false);
*/
   


        useEffect(()=>{
            userRef.current.focus();
        }, [])

        useEffect(()=>{
            setValidName(USER_REGEX.test(this.state.user));
        },[this.state.user])

        useEffect(()=>{
            this.state.validPwd=PWD_REGEX.test(this.state.pwd);
            this.validMatch = this.state.pwd==this.state.matchPwd;
        },[this.state.pwd,this.state.matchPwd])

        useEffect(()=>{
            this.state.errMsg='';
        }),[this.state.user,this.state.pwd,this.state.matchPwd]}


        handleSubmit = async (e) => {
          e.preventDefualt();
          // if button enbaled with Js hack
          const v1 = USER_REGEX.test(this.state.user);
          const v2 = PWD_REGEX.test(this.state.pwd);
          let user = this.state.user;
          let pwd =  this.state.pwd;
          if(!v1 || !v2){
            this.state.errMsg ="Invalid Entry";
            return;
          }  

          try{
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({user,pwd}),
                    
                        {
                            headers:{'Content-Type':'application/json'},
                            withCredentials:true
                        }
                    );
                    console.log(response?.data);
                    console.log(response?.accessToken);
                    console.log(JSON.stringify(response))
                    this.state.success = true;
                    //clear state and controlled inputs
                    //need value attrib on inputs for this
                    this.state.user ='';
                    this.state.pwd='';
                    this.state.matchPwd=''; 
          }
          catch(err){
                if(!err?.response){
                    this.state.errMsg ='NO Server Response';
                }
                else if(err.response?.status === 409){
                    this.state.errMsg ='Username Taken';
                }
                else{
                    this.state.errMsg = 'Registrations Failed';
                }
                err.current.focus();
          }
        

    }


    render(){
        return (
            <>
            
            
            {this.state.success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={this.state.errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{this.state.errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={this.state.validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={this.state.validName || !this.state.user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={this.state.userRef}
                            autoComplete="off"
                            onChange={(e) => this.state.setUser =e.target.value}
                            value={this.state.user}
                            required
                            aria-invalid={this.state.validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => this.state.userFocus =true}
                            onBlur={() => this.userFocus =false}
                        />
                        <p id="uidnote" className={this.state.userFocus && this.state.user && !this.state.validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={this.state.validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={this.state.validPwd || !this.state.pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => this.state.pwd = e.target.value}
                            value={this.state.pwd}
                            required
                            aria-invalid={this.state.validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => this.state.pwdFocus=true}
                            onBlur={() => this.state.pwdFocus= false}
                        />
                        <p id="pwdnote" className={this.state.pwdFocus && !this.state.validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={this.state.validMatch && this.state.matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={this.state.validMatch || !this.state.matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => this.state.matchPwd =e.target.value}
                            value={this.state.matchPwd}
                            required
                            aria-invalid={this.state.validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => this.state.matchFocus=true}
                            onBlur={() => this.state.matchFocus=false}
                        />
                        <p id="confirmnote" className={this.state.matchFocus && !this.state.validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!this.state.validName || !this.state.validPwd || !this.state.validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
            
            
            </>
        );
    }
}

export default Register;