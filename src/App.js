import logo from "./logo.svg";
import "./App.css";
import axios from "axios"
import Home from "./Home.js";
import Navbar from "./Navbar"
import Card from './Card';
import Signup from "./Signup"
import Carousel from "./Carousel"
import Login from './Login'
import cakes from './data';
import {useState} from 'react';
import CakeDetails from "./CakeDetails";
import Search from "./Search";

import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";


if(localStorage.token){
  var token=localStorage.token
  console.log("Mean user is already logged in")
  axios({
    method:'get',
    url:'',
    headers:{
      authtoken:token
    }
  }).then((response)=>{
    console.log("response from user api", response)
    

  })
}


function App() {
    var [login,setLogin]=useState(false);
    var [show,setShow]=useState(false)
    var [com,setCom]=useState({});
    let showDetails=(data)=>{
        setShow(true)
        setCom(data)
    }
  return (
    <div>

<Router>
      <Navbar islogin={login} setlogin={setLogin}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/cake/:cakeid" exact component={CakeDetails}/>
          <Route path="/*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
  </div>
  );
}


export default App;


