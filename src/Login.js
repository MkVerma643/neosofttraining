import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { loginUser } from "./reduxstore/thunk";

function Login (props){

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    var user = {}
    var [user, setUser] = useState({})
    var [message, setMessage] = useState({})
    if (props.isLoggedin) {
   
        props.history.push("/");
     
    }

    let getEmail = (event)=>{ 
        setUser({
            ...user,
                email : event.target.value
            }); 
            user.email=event.target.value; 
        }
       
    let getPassword = (event)=>{ 
         setUser({
             ...user,
            password :  event.target.value
        }) 
    }
    let login = (e) => {
        e.preventDefault();
        // console.log("did you just hit the login button", user);
        if (!user.email || !user.password) {
          setMessage({
            error: "Email And Password Required",
          });
        } else if (!validateEmail(user.email)) {
          setMessage({
            error: `A Valid Email Please`,
          });
        } else {
          setMessage({
            error: false,
          });
          //thunk
          props.dispatch(loginUser(user,process.env.REACT_APP_BASE_URL));
          //thunk
          // saga code starts
          // props.dispatch({
          //     type:"LOGIN",
          //     payload:user
          // })
          // saga code ends
        }
      };
   
 return(
        <div>
            <h3>Login</h3>
            <div style={{"width":"50%", "margin":"auto"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={getEmail}></input>
                    {user.email}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={getPassword}></input>
                        {user.password}    
                    </div>
                    <div className="text-danger">
                        {console.error()}
                    </div>
                    <div>
                        <Link to="/signup">New User? Click Here</Link>

                    </div>
                    
                    <button className="btn btn-secondary m-3" onClick={login}>Login</button>
                    <br></br>
                    <Link to="/resetpassword" >Forgot Password?</Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    {message.success && <span className="alert alert-success">{message.success}</span>}
                    {message.error && <span className="alert alert-danger">{message.error}</span>}
                    </div>
                    </div>
            );
 }     

 Login = withRouter(Login);
 export default connect(function (state, props) {
   console.log("states in login component", state);
   return {
     loginError: state?.isloginerror,
     logging: state?.isfetching,
     isLoggedin: state?.isLoggedin,
   };
 })(Login);