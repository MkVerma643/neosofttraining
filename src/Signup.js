import {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Signup extends Component{
    constructor(props){
        super()
        this.state = {
            count : 0,  
        }
    }
    user={}
    getEmail=(event)=>{
        this.user.email= event.target.value;
    }
    getName=(event)=>{
        event.preventDefault();
        this.user.name=event.target.value
    }
    getPassword=(event)=>{
        event.preventDefault();
        this.user.password=event.target.value
    }
    validateEmail = (email)=>{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    register=()=>{
      
        if(!this.user.email || !this.user.password){
            this.setState({
                errorMessage : 'All field are required'
            })
        }
        else if (!this.validateEmail(this.user.email)){
            this.setState({
                errorMessage : 'A Valid Email Please'
            })
        }
        else{
            this.setState({
                errorMessage : null
            })
         
           let apiurl="https://apibyashu.herokuapp.com/api/register"
           axios({
               url:apiurl,
               method:"post",
               data:this.user
           }).then((response)=>{
               console.log(this.user)
               console.log("response from signup API", response.data)
           },(error)=>{
               console.log("error from signup API", error)
           })
        console.log("user details",this.user)
        this.setState({
            errorMessage:""
        })
       }
    }
    
    
    render(){
        return(
                <div style={{"width":"50%", "margin":"auto"}}>
                    <h3>Register</h3>
                    {/* hey users {this.state.onlineusers} */}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.getEmail}></input>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" onChange={this.getName}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.getPassword}></input>
                    </div>
                    
                    <div>
                        <Link to="/login">Already Registered? Login Here</Link>
                    </div>
                    
                    <button className="btn btn-primary" onClick={this.register}>Register</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    {this.state.errorMessage && <span  className=" alert alert-danger">{this.state.errorMessage}</span> }
                    {this.state.Message && <span  className="alert alert-success">{this.state.Message}</span> }

                </div>
        )
    }
}

export default Signup