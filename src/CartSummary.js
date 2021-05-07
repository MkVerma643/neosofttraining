import { connect } from "react-redux"
import cart from "./cart"

function Summary(props) {
    let total = 0;
    return ( 
            <table className="table table-stripped" >
                <thead></thead>
                <tbody>
                <tr>
                    <th className="small_font">Cake Name</th>
                    <th className="small_font">Cake Image</th>
                    <th className="small_font">Cake Price</th>
                    <th className="small_font">Cake Quantity</th>
                </tr>
                {props.cart?.data?.length > 0 && props?.cart?.data?.map((each,i)=>{
                    {total += each.price * each.quantity}
                    return (
                        <tr key={i}>
                            <td className="small_font">{each.name}</td>
                            <td className="small_font"><img src={each.image} alt={each.name} style={{width:"75px"}}/></td>
                            <td className="small_font">{each.price}</td>
                            <td className="small_font">{each.quantity}</td>
                            
                        </tr>
                    )
                })} 
                <tr><th colSpan="2">Total</th> <th>{total}</th></tr>
                </tbody>
            </table> 
    )
}

export default connect(function(state,props) { 
    return {
        cart:state?.cart

    }
})(Summary)