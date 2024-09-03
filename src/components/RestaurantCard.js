import { CDN_URL } from "../utils/constants"; //named export is imported like this.



const RestaurantCard = (props) => {
    const {resData} = props;
 
    const{cloudinaryImageId,
     name,                             // destructuring
     cuisines,
     avgRating
     ,costForTwo } = resData?.info;
 
    return ( 
       <div className="res-card"> 
         <img className="res-logo" alt="res-logo" src={ CDN_URL + cloudinaryImageId }  />  
 
       <h3>{name}</h3> 
       <h4>{cuisines.join(", ")} </h4> 
       <h4>{avgRating }</h4> 
       <h4>{resData.info.sla.deliveryTime} minutes </h4> 
       <h4>{costForTwo}</h4>
       </div>    // .join in cuisine is used to convert array with , seperated.
    );
  };


  export default RestaurantCard;