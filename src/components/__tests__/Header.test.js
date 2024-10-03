import { fireEvent, render,screen, waitFor} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it('should load header component with a login button ', () => {
    
    render(
     <BrowserRouter> 
      <Provider store={appStore}>
         <Header />
      </Provider>
    </BrowserRouter>
);
      const loginButton = screen.getByRole("button");

    // const loginButton = screen.getByText("login");

    // const loginButton = screen.getByRole("button",{name:"login"}); ( this way is used when there are multiple buttons and we have to look for the button having name button)

 expect(loginButton).toBeInTheDocument();

});

it('should load header component with a cart ', () => {
    
  render(
   <BrowserRouter> 
    <Provider store={appStore}>
       <Header />
    </Provider>
  </BrowserRouter>
);
    const cartItems = screen.getByText(/Cart/);

   
expect(cartItems).toBeInTheDocument();

});

// it('should change login button to logout on click',  () => {
//   render(
//     <BrowserRouter> 
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//    const logoutButton = screen.getByRole("button", { name: "Logout" });


//     expect(logoutButton).toBeInTheDocument();
  
// });

