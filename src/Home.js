import Carousel from "./Carousel";
import Cake from "./Cake";
import cakes from "./data";
import CakeDetails from "./CakeDetails";
import {useState} from 'react';

// var obj={
//     name:"Choco Delight",
//     image:"cake1.png",
//     price:900,
//     id:3534
// }

function Home(){
    return (
        <div style={{border:"1px solid"}}>
            <Carousel></Carousel>
            <div className="row">
                {/* <Cake cakedata={obj} /> */}

                {cakes?.length>0 && cakes.map((each,index)=>{
                    return < Cake cakedata={each} key={index} />

                })}
            </div>
        </div>
    );
}

export default Home;