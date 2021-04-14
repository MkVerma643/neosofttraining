import logo from "./logo.svg";
import "./App.css";

import Home from "./Home.js";
import Navbar from "./Navbar"
import Card from './Card';
import Signup from "./Signup"
import Carousel from "./Carousel"
import Login from './Login'
import cakes from './data';
import {useState} from 'react';
import CakeDetails from "./CakeDetails";

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
    <Navbar islogin={login} setlogin={setLogin}/>
    <Carousel/>
    <Signup/>
    <Login islogin={login} setlogin={setLogin}/>
    {/* <center><SignUp/></center> */}
    {show?<CakeDetails  cdata={com}/>:''}
    <div className="row">
      
      {cakes.length>0 && cakes.map((each,index)=>{
        return(<Card cake={each} showdetails={showDetails} cakedata={each} key={index}/>)
      })
      }
    
   </div>
  </div>
  );
}

export default App;
