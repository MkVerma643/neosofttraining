import Home from "./Home.js";

function Cake(props){
    console.log("Props recieved", props)
    return(
        <div class="card" style={{width: "18rem"}}>
            <img src={props.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.cakedata.name}</h5>
            </div>
        </div>
    );
}

export default Cake