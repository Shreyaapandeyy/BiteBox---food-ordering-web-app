import { useState } from "react";
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
      <div className="header flex justify-between items-center bg-gradient-to-r from-pink-50 via-pink-200 to-pink-100 p-4">
      {/* Logo Container */}
      <div className="logo-container flex items-center">
        <img className="logo w-32 h-20 rounded-full mr-3" src={logo} alt="logo" />
        {/* <span className="text-xl font-bold text-gray-700">BITE BOX</span> */}
      </div>
    
      {/* Navigation Items */}
      <div className="nav-items flex items-center space-x-6 text-gray-800">
        <span className="flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
          Status: {onlineStatus ? "Online🟢" : "Offline🔴"}
        </span>
        <Link to="/" className="text-lg hover:text-pink-600 transition ">Home</Link>
        <Link to="/about" className="text-lg hover:text-pink-600 transition">About Us</Link>
        <Link to="/contact" className="text-lg hover:text-pink-600 transition">Contact Us</Link>
        <Link to="/cart" className="text-lg font-semibold hover:text-pink-600 transition">
          Cart ({cartItems.length} items)
        </Link>
    
        {/* Login Button */}
        <button
          className="px-4 py-2 bg-green-100 text-black font-semibold rounded-lg hover:bg-green-300 transition"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
    

    );
    
     };

     export default Header;     // after exporting only we can import it in the appcomponent. first give then take.