import Carousel from "./Carousel";
import Cake from "./Cake";
import CakeDetail from "./CakeDetails";
import cakes from "./data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from './Card'
import Pagination from './Pagination'

function Search(props) {
  // let [result, setResult]  = useState({})
  let [cakes, setCakes] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [cakesPerPage] = useState(10);

  useEffect(() => {
    // console.log("aaa",search.searchid)
    axios({
      url:
        "https://apifromashu.herokuapp.com/api/searchcakes" +
        props.location.search,
      method: "get",
    }).then(
      (response) => {
        console.log("responese:", response);
        setCakes(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [props.location.search]);

  const indexOflast = currentPage * cakesPerPage;
  const indexOfFirst = indexOflast - cakesPerPage;
  const currentCakes = cakes.slice(indexOfFirst, indexOflast);

  return (
    <div> Page {currentPage}
          <div style={{marginLeft:"40%"}}>
            <Pagination cakesPerPage={cakesPerPage} totalCakes={cakes.length} paginate={setCurrentPage}/>
            </div>
              <div className="row">
              {currentCakes?.length > 0 && currentCakes.map((each, index) => {
                return (<Card data={each} key={index} />)
              })}
            </div>
            <div style={{marginLeft:"40%"}}>
            <Pagination cakesPerPage={cakesPerPage} totalCakes={cakes.length} paginate={setCurrentPage}/>
            </div>
           
          </div>
  );
}

export default Search;
