import Header from './header';
import Footer from './Footer';
import Carousel from './Carousel';
import Card from './Card';
import Signup from './Signup';
import Login from './Login';
import CakeDetails from './CakeDetails';
import { useEffect, useState } from 'react';
import axios from "axios";
import Search from './Search';

function Home(params) {

  let [cakes, setCakes] = useState({})
  let [searchCake, setSearchCake] = useState({})
  let [login, setlogin] = useState(false);

  useEffect(() => {
    axios({
      url: "https://apifromashu.herokuapp.com/api/allcakes",
      method: "get",
    }).then((response) => {
      setCakes(response.data.data)
    }, (error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <div className="App">

      <div className="row">
      </div>
      <Carousel />      
      <h1>My CakeShop</h1>

      <div className="row">
        {cakes?.length > 0 && cakes.map((each, index) => {
          return (<Card data={each} key={index} />)
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default Home