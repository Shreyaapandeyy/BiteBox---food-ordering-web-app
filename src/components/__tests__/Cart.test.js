import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"; 
import MOCK_DATA_NAME from "../mocks/mockResMenu";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>
Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME)
})
);


test('should load restaurant menu component ',  async() => { 
    await act (async () => render(
     <BrowserRouter>    
    <Provider store={appStore}>
        <RestaurantMenu />
        <Header/>
        <Cart />
    </Provider> 
    </BrowserRouter>
    )
);
 
const accordianHeader = screen.getByText("Recommended (11)");
 fireEvent.click(accordianHeader);
  
  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  const addBtns = screen.getAllByRole("button",{name:"Add"});

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(13); // 11 in the recommended and 2 in the cart ,coz both are using same itemslists having same test id.








});