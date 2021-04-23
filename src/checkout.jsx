import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom' 
import Address from "./address";
import Payment from "./payment";
import CartSummary from "./CartSummary";
import Order from "./order";
import { connect } from "react-redux";


function Checkout(props) {
    if(props?.isLoggedin){
        console.log("logged in")
    }
    else{
        console.log("not logged in",props)
        props.history.push('/')
    }
    
    console.log(props.match)

    return (
        <div>
        <h3 style={{margin:"25px", color:'lightgray'}}>Checkout Page</h3>
        <div className="row">
            <div className="col-4">
            
            <Link to={props.match.url} className="btn btn-light form-control"  style={{listStyleType:'none', margin:'10px'}}>
                   Cart Summary</Link>
               
             <Link to={props.match.url+"/address"}  className="btn btn-light form-control"  style={{listStyleType:'none', margin:'10px'}}>
                   Delivery Address</Link>
                
            <Link to={props.match.url+"/payment"} className="btn btn-light form-control"  style={{listStyleType:'none', margin:'10px'}}>
                    Payment Option</Link>
               
            <Link to={props.match.url+"/order"}  className="btn btn-light form-control"  style={{listStyleType:'none', margin:'10px'}}>
                    Order Now</Link>
                
            </div>

            <div className="col-md-8">
                 <Route exact path={props.match.path} component={CartSummary} ></Route>
                <Route exact path={props.match.path+"/address"} component={Address}></Route>
                <Route exact path={props.match.path+"payment"} component={Payment}></Route>
                <Route exact path={props.match.path+"/order"}></Route>
            </div>
        </div>
        </div>
    )
}

        
export default connect(function(state,props){
    return {
        isLoggedin:state?.isLoggedin
    }
})(Checkout)