import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();        //api will be called once after inital render because empty dependcy array is given.
    },[]);

    const fetchMenu = async ()=>{
     const data = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");

     const json = await data.json();
     console.log(json);
     setResInfo(json.data);
    };

    

    if (resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
     console.log(itemCards);

    
  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3> 
        <h2>Menu</h2>
        <ul>
          {itemCards.map((items)=>(
            <li key={items.card.info.id}>
              {items.card.info.name} - {" Rs."}
            {items.card.info.price/100 || items.card.info.defaultPrice/100}
            </li>
          ))}
             
        </ul>

    </div>
  );
};

export default RestaurantMenu;