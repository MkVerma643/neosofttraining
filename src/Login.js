import {useState,useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';

function Login (props){
    
    var user = {}
    var [user, setUser] = useState({})
    var [message, setMessage] = useState({})
    
   let getEmail = (event)=>{ 
        setUser({
            ...user,
                email : event.target.value
            });
            
            user.email=event.target.value;
            console.log(user,'ss')
        }
       
    let getPassword = (event)=>{ 
         setUser({
             ...user,
            password :  event.target.value
        })
        
        console.log(user,'pas')
    }
    let login =()=>{
        console.log(user)
       if(!user.email || !user.password){
        setMessage({
            error: "Please Fill all required fields"
        }); 
       }
       else{
        axios({
            url:"https://apibyashu.herokuapp.com/api/login",
            method:"post",
            data:user,
        }).then((response)=>{
            console.log("success: ",response)
            if(response.data.token){
                localStorage.token = response.data.token
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
            setMessage({
                success: "Login Successfull"
            });
            props.history.push('/')
         props.set(true)
         props.userName(user.name)
        }
        else{
            
            setMessage({
                error: "Invalid Credentials"
            }); 
        }
        },(error)=>{
            console.log(error)
        })
        
       }
    }
   
   
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
                    </div>
                    </div>
            );
 }     

Login =  withRouter(Login)
export default connect(function (state,props) {
        return {

        }
})(Login);