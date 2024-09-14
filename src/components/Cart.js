import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
 const dispatch = useDispatch();

    const handleClear =()=>{
      
        dispatch(clearCart());
    };
    const handleRemove =(cartItems)=>{
        dispatch(removeItem(cartItems));
    }
  return (
    <div className="text-center m-4 p-4 ">
       <h1 className="  font-bold text-xl">Cart</h1>
       <div className="m-2 p-2 mx-auto">
       <button className="m-4 px-2 py-2 border rounded-md bg-green-200 font-bold" onClick={handleClear}>Clear cart </button>
       <button className="m-4 px-2 py-2 border rounded-md bg-green-100 font-bold" onClick={handleRemove}>remove items</button>
       </div>
        

      <div className="w-6/12 mx-auto border">
        <ItemList items={cartItems} />
      </div>

     </div>
  )
}

export default Cart;