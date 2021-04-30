import Pagination from "./Pagination";



function Cake(props){
    console.log("Props recieved", props)

    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.cakedata.image} height="200px" className="card-img-top container-fluid" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.cakedata.name}</h5>
            </div>
        </div>
        
        // <div>
        // {props.length > 0 ? (
        //     <>
        //       <Pagination
        //         data={props}
        //         RenderComponent={props}
        //         title={props.cakedata.name}
        //         pageLimit={5}
        //       />
        //     </>
        //   ) : (
        //    <h1>No Posts to display</h1>
        //   )}
        //   </div>
    );
}

export default Cake