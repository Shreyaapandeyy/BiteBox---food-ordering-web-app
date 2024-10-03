import { CDN_URL } from "../utils/constants"; //named export is imported like this.



const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);
 
    const{cloudinaryImageId,
     name,                             // destructuring
     cuisines,
     avgRating
     ,costForTwo } = resData?.info;
 
    return ( 
       <div data-testid ="resCard" /** to get how many res card during testing in jest we can get the number of cards using testid */
        className="res-card m-4 p-3 w-[200px] bg-gray-100 hover:scale-105 hover:bg-gray-200 transition-transform duration-200 "> 
         <img className="res-logo rounded-md " alt="res-logo" src={ CDN_URL + cloudinaryImageId }  />  
 
       <h3 className="font-bold py-2 text-lg">{name}</h3> 
       <h4>{cuisines.join(", ")} </h4> 
       <h4>{avgRating }</h4> 
       <h4>{resData.info.sla.deliveryTime} minutes </h4> 
       <h4>{costForTwo}</h4>
       </div>    // .join in cuisine is used to convert array with , seperated.
    );
  };


  export default RestaurantCard;