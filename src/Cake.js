import Home from "./Home.js";

function Cake(props){
    console.log("Props recieved", props)
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.cakedata.image} height="200px" className="card-img-top container-fluid" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.cakedata.name}</h5>
            </div>
        </div>
    );
}

export default Cake