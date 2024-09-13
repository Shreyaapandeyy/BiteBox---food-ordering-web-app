import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    console.log(data);
    const[showItems,setshowItems] = useState(false);


    const handleClick = () =>{
      setshowItems(!showItems);   //if my showitems is true turn it false mtlb agar true h to items dikh rhe honge to onclick krne pe close hojayega and same vice versa
    }

    return (
        <div>
            {/*-header-*/}
            <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4" >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>

            </div>
             
           {showItems&& <ItemList items= {data.itemCards}/> }  {/**if showitems true h tabhi itemlist show kro ui pe nhi to close hoga */}
            </div>
             
        </div>
    );
};

export default RestaurantCategory;