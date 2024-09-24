import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    // const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);               // previuosly we were doing all this in this component but now we made custom hook aur ab waha ye sari chize krrhe jo resid leke resinfo provide krrrha . it is the same thing bs alag component banake code halka krdiya , 



    // useEffect(()=>{
    //     fetchMenu();        //api will be called once after inital render because empty dependcy array is given.
    // },[]);

    // const fetchMenu = async ()=>{
    //  const data = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");

    //  const json = await data.json();
    //  console.log(json);
    //  setResInfo(json.data);
    // };

    

    if (resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    //  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

     console.log(categories);

    
  return (
    <div className="menu text-center ">
        <h1 className="font-bold  text-2xl my-4">{name}</h1>
        <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3> 
        {/* <h2>Menu</h2>
        <ul>
          {itemCards.map((items)=>(
            <li key={items.card.info.id}>
              {items.card.info.name} - {" Rs."}
            {items.card.info.price/100 || items.card.info.defaultPrice/100}
            </li>
          ))}
             
        </ul> */}
        {categories.map((category)=>(<RestaurantCategory key={category?.card.card.title} data={category?.card?.card} />))}

         


    </div>
  );
};

export default RestaurantMenu;