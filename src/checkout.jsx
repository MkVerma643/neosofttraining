import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom' 
import Address from "./address";
import Payment from "./payment";
import CartSummary from "./CartSummary";
import Order from "./order";
import OrderView from "./orderview";
import { connect } from "react-redux";


function Checkout(props) {
    let title = "Summary"
    let url = props.match.url
    console.log("ssss",props)

    if(props?.isLoggedin){
        // console.log("logged in")
    }
    else{
        console.log("not logged in",props)
        props.history.push('/')
    } 
    if(props.location.pathname == "/checkout/address"){
        title = "Address"
    }
    else if(props.location.pathname == "/checkout/order"){
        title = "Order"
    }
    else if(props.location.pathname == "/checkout/payment"){
        title = "Payment"
    }
    let NextRoute = (url)=>[
        props.history.push(`/checkout${url}`)
    ]

    return (
        <div>
        <h3 style={{margin:"25px", color:'lightgray'}}>Checkout Page</h3>
        <div className="row">
            <div className="col-4">
            
            <table className="table side-bar-box">
                       <tr>
                           <th> 
                               <button  className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }}   onClick={()=>NextRoute('/')}>
                                   Summary
                               </button>
                               {/* <Link to={url} className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }} >
                                Summary
                                </Link> */}
                           </th>
                        </tr>
                       <tr>
                           <th>
                           <button  className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }}   onClick={()=>NextRoute('/address')}>
                                   Address
                               </button>
                            </th>
                        </tr>
                       <tr>
                           <th>
                           <button disabled={props.page? false: true} className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }}   onClick={()=>NextRoute('/payment')}>
                                   Payment
                               </button>
                            </th>
                        </tr> 
                        <tr>
                           <th>
                           <button className="btn btn-dark form-control" style={{ textDecoration: 'none',color: '#fff' }}   onClick={()=>NextRoute('/order')}>
                                   Order
                               </button>
                            </th>
                        </tr> 
                   </table>
                
            </div>

            <div className="col-md-8">
            <Route exact path={props.match.path} component={CartSummary} ></Route>
                <Route exact path={props.match.path+"/address"} component={Address}></Route>
                <Route exact path={props.match.path+"/payment"} component={Payment}></Route>
                <Route exact path={props.match.path+"/order"} component={Order}></Route>
                <Route exact path={props.match.path+'/order/:orderid'} component={OrderView}></Route>
            </div>
        </div>
        </div>
    )
}

        
export default connect(function(state,props){
    return {
        isLoggedin:state?.isLoggedin,
        address:state?.address,
        page:state?.page,
    }
})(Checkout)