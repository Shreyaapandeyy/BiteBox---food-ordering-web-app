
import React from  "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
// const heading = React.createElement("h1",{id:"heading",xy:"abc"},"Hello world ");  // 3rd one -(hello world ) is basically children and it goes inside the h1 tag
// // 2nd one - {id & and other things are the attributes }       both of the children and attributes are shown in the props in the broswer . props consist od=f children and attributes.
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);      // it is an object bcoz it is creating a normal react elemnt and react element is nothing but a javascript object.

// root.render(heading);    // it is taking the object and converting it into the h1 tag and putting it into the DOM.



/* <div id = "parent">

      <div id ="child">
         <h1> I m h1 tag </h1>                creating this using react
         <h2> i m h2 tag </h2>               
      </div>

    </div>
    */

    // const parent = React.createElement ("div",{id:"parent"},
    //     React.createElement ("div",{id:"child"},
    //        [ React.createElement ("h1",{},"I m h1 tag"), 
    //          React.createElement ("h2",{},"I m h2 tag")])

   //        // if we need to create sibling pass it using array
        
    //     );



    /* <div id = "parent">

             <div id ="child">
                  <h1> I m h1 tag </h1>            creating this using react
                  <h2> i m h2 tag </h2>               
                </div>

             <div id = "child2">
                 <h1> I m h1 tag </h1>                 
                 <h2> i m h2 tag </h2>               
             </div>
    </div>
    */

    // const parent = React.createElement ("div",{id:"parent"},
        
    //     [ React.createElement ("div",{id:"child"},
    //     [ React.createElement ("h1",{},"I m h1 tag"), 
    //       React.createElement ("h2",{},"I m h2 tag")]),
    //       React.createElement ("div",{id:"child2"},
    //         [ React.createElement ("h1",{},"I m h1 tag"), 
    //           React.createElement ("h2",{},"I m h2 tag")])
          

    //      ]
    //         );


    //using JSX it is a html like or xml like syntax
    //when giving attribute in jsk it is given in camale case.


         //   const jsxheading = <h1 id="heading"> react using jsx  </h1>
         //    console.log(jsxheading);

         //    const root = ReactDOM.createRoot(document.getElementById("root"));  

         //    root.render(jsxheading);



         // react element
const heading = (
   <h1 className="head" >
      react using jsx
   </h1>
);


  // react functional component

//   const Component = () => {
//      return <h1> this is a functional component </h1>;                                       // both ways are same

//   };
  
//   const Component2 = () => <h1>this is a functional component </h1> ;



  // in arrow func these two are same 
//   const fn = () => {
//     return true;
//   };

//   const fn = () => true;   //if need to write in multiple lines then wrap it using ()
   

const elem = <span>REact element</span>;


const title = (                        //react elem under react elem
   <h1 className="head">                       
      {elem}                         
      react using jsx                    
   </h1>
);


const HeadingComponent = () => (
   <div id="container"> 
     {title}
      <h1 className="heading"> functional component

      </h1>
   </div> 
);


// component compossition

const Title = ()=>(
   <h1>
      react using jsx
   </h1>
);
 

// const Title =  function () {
//  return   (
//    <h1>                             using normal function
//       react using jsx
//    </h1>
// );

// };


/**
 *--- header
 * logo
 * nav items
 * ---body
 * search
 * Restaurant container
 * restaurant card
 *--- footer
 * copyright
 * links
 * address
 * contact
 * 
 * 
 * 
 */
  

 const  AppLayout = () => {
         return (
            <div className="app">
               <Header />
               <Outlet/>
            </div>
         );      
 };

const approuter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      children:[
         {
          path: "/",
          element: <Body/>,

         },
         {
            path: "/about",       //if i am on /about path load about page.
            element: <About/>,
         },
         {
            path: "/contact",
            element: <Contact/>,
         },
         {
         path: "/restaurants/:resId",
         element: <RestaurantMenu />,
         },
      
      ],
      errorElement: <Error/>,
   },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root")); 
  root.render( <RouterProvider router={approuter}/> );




  