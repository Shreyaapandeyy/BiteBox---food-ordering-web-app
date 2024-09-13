import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({items}) =>{
  console.log(items);

  const dispatch = useDispatch();

  const handleCart = () =>{
    // dispatch an action
    dispatch(addItem("pizza"));
  };
    return (
         <div>
            {items.map((item ) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-b-gray-300  text-left flex justify-between">

                  <div className="py-2 w-9/12 ">
                    <span className="text-sm font-bold">{item.card.info.name}</span>
                    <span className="text-sm font-bold"> - ₹ {item.card.info.defaultPrice/100||item.card.info.price/100}</span> 
                    <p className="text-sm">{item.card.info.description}</p>
                </div>  

                 <div className="w-3/12 p-4 ">
                 <div className="absolute mx-6  pt-28"> 
                  <button className=" p-2   bg-slate-50 rounded-xl w-28 text-green-400 font-bold" onClick={handleCart}>Add </button>
                  </div>
                  <img  className=""  src={CDN_URL +item.card.info.imageId }></img>
                  
                 </div>

                </div>
               ))}
         </div>
    );
};
export default ItemList;