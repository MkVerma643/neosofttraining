import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import axios from "axios"; 
import { connect } from "react-redux";
function CakeDetails(props) {
  let addtocart = (data) =>{ 
    axios({
      method:'post',
      url:"https://apibyashu.herokuapp.com/api/addcaketocart",
      headers:{authtoken:localStorage.token},
      data:{name:data.name,image:data.image,cakeid:data.cakeid,price:data.price,weight:data.weight}
    }).then((response)=>{ 
      if(response.data.message == "Added to cart"){
        console.log(console.log("....cartdata: " ,response.data.data.cakeid))
        props.dispatch({
            type:"CART",
            payload:response.data.data.cakeid
        })
      }
    },(error)=>{
      console.log("addcart error",error)
    })
}
  const params = useParams();
  let [details, setDetails] = useState({}) 
  // useEffect(()=>{
    let cakeapi = "https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
    axios({
      method:'get',
      url:cakeapi,
    }).then((response)=>{
      setDetails(response.data.data)
      // console.log(response.data.data)
    },(error)=>{
      console.log("error",error)
    })
  // },[])
    return (
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-6">
            <img className="singleimage" src={details.image? details.image 
              : 'https://www.jqueryscript.net/images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg'}/>
            </div>
            <div className="col-md-6">
            <h1 className="display-4">{details.name? details.name: 'Loading...'}</h1>
        
        <hr className="my-4"/>
        <p><b>Price:</b> {details.price?details.price:'Loading...'} </p>
        <p><b>Description:</b>{details.description} </p>
        <p><b>Eggless:</b>{details.eggless === true? 'Yes' : 'No'} </p>
        <p><b>ratings:</b>{details.ratings} </p>
        <p><b>flavour:</b>{details.flavour} </p>
        <button onClick={()=>addtocart(details)} className="btn btn-warning">Add to Cart</button>
            </div>
          </div>
       
      </div>)
}

export default connect()(CakeDetails)