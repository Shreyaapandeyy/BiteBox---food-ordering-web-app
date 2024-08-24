import { LOGO_URL } from "../utils/constants";



const Header = () =>{
    return (
       <div className="header">
          <div className="logo-container">
             <img  className="logo" src= {LOGO_URL}/>
          </div>
          <div className="nav-items">
            <ul className="ul">
             <li>Home</li>
             <li>About us</li>
             <li>Contact Us</li>
             <li>Cart</li>
    
            </ul>
          </div>
    
       </div>
    );
    
     };

     export default Header;     // after exporting only we can import it in the appcomponent. first give then take.