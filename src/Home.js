import Carousel from "./Carousel"
import Cake from "./Cake"
import cakes from "./data"
import CakeDetails from "./CakeDetails"

var obj={
    name:"Choco Delight",
    image:"mg.jpg",
    id:1111,
    price:900

}

function Home(){
    return (
        <div style={{border:"1px solid"}}>
            <Carousel></Carousel>
            <div className="row">

                {/* <Cake cakedata={obj} />
                {cakes?.length>0 && cakes.map((each,index)=>{
                    return (<Cake cakedata={each} index = {index} />)
                })} */}

                <CakeDetails></CakeDetails>
                
            </div>
        </div>
    );
}

export default Home