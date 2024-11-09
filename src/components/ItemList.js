import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({items}) =>{
  // console.log(items);

  const dispatch = useDispatch();

  const handleCart = (item) =>{
    // dispatch an action
     dispatch (addItem(item));
  };
    return (
      <div>
    {items.map((item) => (
        <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-4 mb-6 border-b-2  border-b-gray-300  text-left flex justify-between"
        >
            <div className="w-8/12 pr-4">
                <span className="text-lg font-semibold text-gray-800">{item.card.info.name}</span>
                <span className="text-lg font-semibold text-gray-600 ml-2"> - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
                <p className="text-sm text-gray-600 mt-2">
                    {item.card.info.description.length > 100
                        ? `${item.card.info.description.slice(0, 100)}...`
                        : item.card.info.description}
                </p>
            </div>
            <div className="w-4/12 flex flex-col items-center">
                <img className="w-32 h-32 rounded-lg object-cover mb-4" src={CDN_URL + item.card.info.imageId} alt="Pizza image" />
                <button
                    className="px-4 py-2 bg-green-300 text-white rounded-full font-semibold hover:bg-green-600 transition duration-300"
                    onClick={() => handleCart(item)}
                >
                    Add
                </button>
            </div>
        </div>
    ))}
</div>

  
    );
};
export default ItemList;