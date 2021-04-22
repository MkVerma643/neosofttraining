import { connect } from "react-redux";

function Address(props) {
    let addressForm = (e)=>{
        e.preventDefault()
    }
    return ( 
        <div className="col-md-9">
             <form className="form-group" style={{textAlign:"left"}} onSubmit={addressForm}> 
            <input style={{margin:"10px"}} value={props?.user?.name} readOnly type="text" className="form-control" placeholder="Enter Name"/> 
            <input style={{margin:"10px"}} value={props?.user?.email} readOnly type="text" className="form-control" placeholder="Enter Phone Number"/> 
            <textarea style={{margin:"20px"}}className="form-control" placeholder="Enter Your Address"/> 
            <div className="row">
            <div className="col-md-6">
            <input style={{margin:"10px"}}type="text" className="form-control" placeholder="Enter Your City"/>
            </div>
            <div className="col-md-6">
            <input style={{margin:"10px"}}type="text" className="form-control" placeholder="Enter Your Pincode"/>
            </div>
            </div>
            <button style={{margin:"10px"}}className="btn btn-primary form-control">Submit</button>
        </form>
        </div>
       
    )
}

export default connect(function(state,props){
    return{
        user:state?.user
    }
})(Address)