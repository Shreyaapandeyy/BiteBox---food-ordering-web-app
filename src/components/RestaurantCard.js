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
      <div
  data-testid="resCard"
  className="res-card shadow-md  m-2 p-4  sm:w-52 md:w-56 lg:w-64 bg-gray-100 hover:scale-105 hover:bg-gray-200 transition-transform duration-200"
>
  <img
    className="w-full h-40 rounded-lg object-cover res-logo"
    alt="res-logo"
    src={CDN_URL + cloudinaryImageId}
  />
  
  <h3 className="font-bold py-2 text-base">{name}</h3>
  <h4 className="text-gray-600 font-medium text-sm">{cuisines.join(", ")}</h4>
  <h4 className="text-gray-600 text-sm">{avgRating}⭐</h4>
  <h4 className="text-gray-600 font-semibold text-sm">{costForTwo}</h4>
</div>

       // .join in cuisine is used to convert array with , seperated.
    );
  };


  export default RestaurantCard;