import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";



const Header = () =>{
   const [btnName,setbtnName] = useState("login");

    return (
       <div className="header">
          <div className="logo-container">
             <img  className="logo" src= {LOGO_URL}/>
          </div>
          <div className="nav-items">
            <ul className="ul">
             <li>
               <Link to="/" className="header-link"> Home</Link>
               </li>
             <li>
             <Link to="/about"  className="header-link">About Us</Link>
             </li>
             <li>
               <Link to="/contact" className="header-link">Contact Us</Link>
            </li>
             <li>Cart</li>
             <button className="login" onClick={()=>{
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