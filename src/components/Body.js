import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";
 import { useState } from "react";
 

 const Body =() => {
  const [listOfRestaurants,setlistOfRestaurants] = useState(resList);
  
    return (
      <div className="body">
         <div className="filter">
           <button className="filter-btn" onClick ={()=> {
             const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
             );
             setlistOfRestaurants(filteredList);
           }} >
            Top Rated Restaurants 
            </button>
         </div>
         <div className="res-container">
         {/* <RestaurantCard resData={resList[0]} />
         <RestaurantCard resData={resList[1]} /> */}
           {listOfRestaurants.map((restaurant) => (
             <RestaurantCard key={restaurant.info.id} resData={restaurant} /> 
             // always give a unique key while looping on a list . or even map.
         ))}
         </div>
      </div>
    );
   
    };

    export default Body;