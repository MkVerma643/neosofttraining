import {Component} from 'react';
import axios from 'axios'

class SignUp extends Component{
    constructor(){
        super()
        this.state={
            onlineusers:0
        }
    }
    user={}
    register=()=>{
      
       if(!this.user.email && !this.user.password)
       {
        this.setState({
            errorMessage:"Please enter valid credentials"
        })
        
       }else{ 
           let apiurl="https://apibyashu.herokuapp.com/api/register"
           axios({
               url:apiurl,
               method: "post",
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
    
    getEmail=(event)=>{
        this.user.email= event.target.value;
    }
    getUsername=(event)=>{
        event.preventDefault();
        this.user.username=event.target.value
    }
    getPassword=(event)=>{
        event.preventDefault();
        this.user.password=event.target.value
    }

    render(){
        return(
                <div style={{"width":"50%", "margin":"auto"}}>
                    <h3>Register</h3>
                    hey users {this.state.onlineusers}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.getEmail}></input>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" onChange={this.getUsername}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.getPassword}></input>
                    </div>
                    <div className="alert alert-danger">
                        {this.state.errorMessage}
                    </div>
                    <button className="btn btn-primary" onClick={this.register}>Register</button>
                </div>
        )
    }
}

export default SignUp