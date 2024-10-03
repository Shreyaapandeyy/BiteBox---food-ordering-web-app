 import RestaurantCard from "./RestaurantCard";
 import { useState,useEffect } from "react";
 import Shimmer from "./shimmer";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";

 const Body =() => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);     //empty..... prieviously it was reslist but to make it dynamic we directy fetched data from api 
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);


  const [searchText, setsearchText] = useState("");


   useEffect(() => {
    fetchData();
   }, []);

   const fetchData = async () => { 
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   };
 
   // conditional rendering     // we can use ternary operator to write this condtion to make it less code using b0th the return statement below. // ex - agar 0 h to ye wala return hoga nhi to baaki sare card
  
   const onlineStatus = useOnlineStatus()

   if (onlineStatus===false ) return <h1> Looks, like you are offline !! Please check your internet connection</h1>;

   if(listOfRestaurants.length === 0){
    return  <Shimmer /> 
   };
   


  
    return (
      <div className="body">
         <div className="filter flex">
         <div className="Search m-4 p-4">
          <input type="text" 
          data-testid = "searchInput" //giving testid for jest testing for getting search input
          className="search-box border border-solid border-black" value={searchText} onChange={(e)=>{                //binding it with the state variable{searchtext}
            setsearchText(e.target.value);      // whenever my input is changing we need to change the searchtext , as it is binded to input text.
          }} />
          <button className="search-btn px-2 py-2 m-4 bg-green-100 border rounded-lg" onClick={()=>{
          const filteredRestaurant = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
          
          );
          setfilteredRestaurants(filteredRestaurant);
          }}
          >Search</button>
         </div>

         <div className="Search -m-4 p-4 flex items-center">
          <button className="filter-btn px-2 py-2  bg-green-100 border rounded-lg " onClick ={()=> {
             const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
             );
             setfilteredRestaurants(filteredList);
           }} >
            Top Rated Restaurants 
            </button>
            </div>
            
         </div>
          
          
         <div className="res-container flex flex-wrap justify-start mx-6">
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