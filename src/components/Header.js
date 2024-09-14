import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assests/logo.jpg"
import { useSelector } from "react-redux";


const Header = () =>{
   const [btnName,setbtnName] = useState("login");
   const onlineStatus = useOnlineStatus();

   //subscribing to the store using a selector
   const cartItems = useSelector((store)=> store.cart.items);

    return (
       <div className="heade flex justify-between bg-pink-100">
          <div className="logo-container w-36">
             <img  className="logo rounded-full mx-2 my-1" src= {logo} />
          </div>
          <div className="nav-items flex items-center">
            <ul className=" flex  m-4 p-4">
               <li className="px-6">
                  Status :{onlineStatus 
?" Online🟢":" Offline🔴"}
               </li>
             <li className="px-6">
               <Link to="/" className="header-link"> Home</Link>
               </li>
             <li className="px-6">
             <Link to="/about"  className="header-link">About Us</Link>
             </li>
             <li className="px-6">
               <Link to="/contact" className="header-link">Contact Us</Link>
            </li>
             <li className="px-6 font-bold text-xl">
             <Link to="/cart" className="header-link">Cart ({cartItems.length}  items)</Link>   
             </li>
             <button className="login px-6" onClick={()=>{
              btnName === "Login"? 
              setbtnName("Logout") :  //have used ternanry condition here to toggle bw login logout , can write using if else also.
              setbtnName("Login");
             }}
             >{btnName} </button>   
    
            </ul> 
          </div>   
    
       </div>
    );
    
     };

     export default Header;     // after exporting only we can import it in the appcomponent. first give then take.