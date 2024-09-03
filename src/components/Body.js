import RestaurantCard from "./RestaurantCard";
 import { useState,useEffect } from "react";
 import Shimmer from "./shimmer";
 import { Link } from "react-router-dom";

 const Body =() => {
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);     //empty..... prieviously it was reslist but to make it dynamic we directy fetched data from api 
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);


  const [searchText, setsearchText] = useState("");


   useEffect(() => {
    fetchData();
   }, []);

   const fetchData = async () => { 
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4209228&lng=77.5267391&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   };

   // conditional rendering     // we can use ternary operator to write this condtion to make it less code using b0th the return statement below. // ex - agar 0 h to ye wala return hoga nhi to baaki sare cards. 
   if(listOfRestaurants.length === 0){
    return  <Shimmer /> ;
   } 


  
    return (
      <div className="body">
         <div className="filter">
         <div className="Search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{                //binding it with the state variable{searchtext}
            setsearchText(e.target.value);      // whenever my input is changing we need to change the searchtext , as it is binded to input text.
          }} />
          <button className="search-btn" onClick={()=>{
          const filteredRestaurant = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
          
          );
          setfilteredRestaurants(filteredRestaurant);
          }}
          >Search</button>
         </div>


           <button className="filter-btn" onClick ={()=> {
             const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
             );
             setfilteredRestaurants(filteredList);
           }} >
            Top Rated Restaurants 
            </button>
         </div>
          
          
         <div className="res-container">
         {/* <RestaurantCard resData={resList[0]} />
         <RestaurantCard resData={resList[1]} /> */}
           {filteredRestaurants.map((restaurant) => (
             <Link key={restaurant.info.id} className="no-underline" to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard  resData={restaurant} /> </Link>
             // always give a unique key while looping on a list . or even map.
         ))}
         </div>
      </div>
    );
   
    };

    export default Body;