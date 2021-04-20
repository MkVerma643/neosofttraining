import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import axios from "axios"
import Home from "./Home.js";
import Signup from "./Signup"
import Login from './Login'
import {useState} from 'react';
import CakeDetails from "./CakeDetails";
import Search from "./Search";
import Header from './header';
import Cart from './Cart';
import Checkout from './Checkout';
import mart from './reduxstore/store'; 
const baseUrl = 'https://apibyashu.herokuapp.com/api/'


if(localStorage.token){
  axios({
    method:"get",
    url:baseUrl+'getuserdetails',
    headers:{
      authtoken:localStorage.token
    }
  }).then((response)=>{ 
    console.log(response)
    mart.dispatch({
      type:"LOGIN",
      payload:response.data.data
  })
  },(error)=>{
    console.log("get user details api. Error: ",error)
  })
}
function App() {
 
  let [details, setDetails] = useState({}) 
  let [cakes, setCakes] = useState({})
  let [searchCake, setSearchCake] = useState({})
  let [login, setlogin] = useState(false);
  let [name, setName] = useState('');
  

return (
  <div className="App">
    <Router>
    <Header getSearchData={setSearchCake} userName={name} checkLogin={login} changeLogout={setlogin,setlogin}/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/login' ><Login userName={setName} checkLogin={login} set={setlogin}/></Route>
      <Route exact path='/cake/:cakeid'><CakeDetails /></Route>
      <Route exact path='/search' component={Search}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      <Route exact path='/checkout' component={Checkout}></Route> 
    </Router>
        {/* <Login userName={setName} checkLogin={login} set={setlogin}/></Router> */}
  </div>
);
}

export default App;