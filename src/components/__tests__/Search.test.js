import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
 
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }, // we will create a mock fetch function because in testing we cant make actual api call because it is running on JS DOM which is a Browser like environment not actual browser , it doesnt support fetching, network call.
    });
});

/**global.fetch: This refers to the fetch function globally available in browsers or environments like Node.js (if polyfilled).
 * 
jest.fn(): Jest's fn() function creates a mock function. This allows you to replace the actual behavior of fetch with a custom mock implementation that you define inside the function. By mocking fetch, you prevent real HTTP requests from happening during your tests.

The object inside the resolved promise is { json: () => { ... } }, which simulates a typical fetch response. A fetch response has a .json() method to parse the body of the HTTP response as JSON.

.json: This mocks the .json() method that you typically call on a fetch response to convert the response body into a JavaScript object.
() => { return Promise.resolve(data); }: This function simulates the behavior of .json() returning a promise that resolves to data. */


test('should search res list for chinese text input',  async () => { 

 await  act(async()=> render(<BrowserRouter>
  < Body />
 </BrowserRouter> 
 )
);   /**The test asynchronously renders the Body component wrapped in a BrowserRouter (likely because the component depends on routing functionality - The reason for using BrowserRouter is that the Body component may include links or routing functionality, and BrowserRouter is required for any routing behavior in the app.).
 The test uses act() to ensure that all component effects, state updates, and other asynchronous operations are handled before moving on. This is especially important when dealing with components that use hooks like useEffect or other async logic. */

 const cardsBeforesearch =screen.getAllByTestId("resCard");

 expect(cardsBeforesearch.length).toBe(20);

 const searchBtn = screen.getByRole("button",{name:"Search"});

 const searchInput = screen.getByTestId("searchInput");

 fireEvent.change(searchInput,{target:{ value:"chinese" }});


 fireEvent.click(searchBtn);
 
 // screen should load 1 cards

 const cardsAftersearch = screen.getAllByTestId("resCard");

//  console.log(cardsAftersearch);

 expect(cardsAftersearch.length).toBe(1);

//  expect(searchBtn).toBeInTheDocument();
 }); 

 test('should filter top rated restaurant list',  async () => { 

    await  act(async()=> render(<BrowserRouter>
     < Body />
    </BrowserRouter> 
    )
   );   /**The test asynchronously renders the Body component wrapped in a BrowserRouter (likely because the component depends on routing functionality - The reason for using BrowserRouter is that the Body component may include links or routing functionality, and BrowserRouter is required for any routing behavior in the app.).
    The test uses act() to ensure that all component effects, state updates, and other asynchronous operations are handled before moving on. This is especially important when dealing with components that use hooks like useEffect or other async logic. */
   
    const cardsBeforeFilter =screen.getAllByTestId("resCard");
   
    expect(cardsBeforeFilter.length).toBe(20);
   
    const filterBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
   
    fireEvent.click(filterBtn);
   
    const cardsAfterFilter = screen.getAllByTestId("resCard");
   
    // console.log(cardsAfterFilter);
   
    expect(cardsAfterFilter.length).toBe(16);
   
    }); 