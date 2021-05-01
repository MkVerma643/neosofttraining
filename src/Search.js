import Carousel from './Carousel';
import Cake from './Cake';
import CakeDetail from './CakeDetails';
import cakes from './data';
import {useEffect, useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

function Search(props){
    let [result, setResult]  = useState({})
    
          useEffect(()=>{
            
            axios({
              url:"https://apifromashu.herokuapp.com/api/searchcakes"+props.location.search,
              method:"get", 
          }).then((response)=>{
              console.log("responese:",response)
              setResult(response.data.data);
          },(error)=>{
              console.log(error)
          })
          },[props.location.search])
          return (  
                  <div className="row">
                  {result?.length> 0 && result.map((each, index)=>{
                  return ( <div className="card thiscard" style={{width:"17rem"}}>
                    <Link to={`/cake/${each.cakeid}`}>
                  <img src={each.image} style={{height: "200px"}} className="thisimg card-img-top"  alt="..."/>
                  </Link>
                  <div className="card-body">  
                  <h5 className="card-title">{each.name}</h5> 
                  </div>  </div>)
                })}
                  </div>
              
               );
  }
  
  export default Search