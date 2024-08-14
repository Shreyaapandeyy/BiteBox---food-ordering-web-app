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

    const parent = React.createElement ("div",{id:"parent"},
        
        [ React.createElement ("div",{id:"child"},
        [ React.createElement ("h1",{},"I m h1 tag"), 
          React.createElement ("h2",{},"I m h2 tag")]),
          React.createElement ("div",{id:"child2"},
            [ React.createElement ("h1",{},"I m h1 tag"), 
              React.createElement ("h2",{},"I m h2 tag")])
          

         ]
            );


            
            console.log(parent);

            const root = ReactDOM.createRoot(document.getElementById("root"));  

            root.render(parent);








  