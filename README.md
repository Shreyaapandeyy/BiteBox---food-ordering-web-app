we dont need to push node modules to the git because if we have package.json and lockjson which we are pusing into git then we  can recreate all the packages again with it . by just writing command --- npm install

we should not put those things into git which we can regenrate.

parcel has  create a server for us and given us a port 1234 and is hoisting our app onto the server


 npm is used to install a package, npx is used to execute a package 

  when we do npx parcel index.html the parcel goes to the src index.html and build a development build for our app and it host tht dev build on localhost 1234


# EPISODE 3-------

- react.createlement    ------ how things are working behind the scene => it creates a react element which is generally the js object  and renders it finally into an html tag .

- JSX is a html or xml like syntax 

-JSX is transpiled before it reaches the js engine ---- it is done by the Barbel which is called by the Parcel.

- basically parcel is a manager which is taking care for a lot of things , and immediatley automatically idetifies the things which  are needed to be done and it calls the requird package for that work.

-  BABEL  converts the jsx code  to the-- (react.createlement )code which is the same react element.

-----------
- REACT COMPONENTS
  Two types of components in react -
  1- Class based components - old way- no one uses it now
  2- Function based components - new way


 # FUNCTIONAL COMPONENT - 

- A function which is returning some type of jsx is a functional component.
-


- we can write javascript code inside the jsx using {} .

- we can write react element inside the component and vice versa
- we can write react elem inside react element.

- JSX takes care of the mallicious attack whenever {data} if a mallicious code is passed thorugh api call in data . jsx automatically takes care of it by cleaning data.

-<Title/> is same as <Title> </Title>
 also 
 at the end of the day functional component is just a function so we can call a function in js using Title() and by wrapping it in {Title()}  we can write it in JSX.

- so <Title/>,<Title> </Title> ,{Title()}  are all same things. by different way.



 # ----PROPS-----
Its just like a argument which is passed in a function. similarly it is passed in components.
it is passed as a js object in the component.
when you have to dynamically pas some data to the components , it is passed as in props.


# ---keys in Map---

it is not recommended to use index as a key in map, but can use it in place where unique id are  not given.

restList.map(restaurant,index)



# two types of export / import

-Default Export/Import 

export default component;
import component from "path";

- Named Export/Import - generally used when exporting multiple things.

export const Component;
import {component} from "path";



# React Hooks
- it is a normal js utility function

-  # useState() -
 it is used to create local state variable (it is super powerful variable)
# local state variable- 
const [listofRestaurants] = useState();
# normal js variable-
let listofRestaurants;
# example-
const [state, setState] = useState(initialState);
- state: The current state value.
- setState: A function that updates the state value.
- initialState: The initial value of the state.

# --render
whenever a state variable changes react rerenders the components.
- react render cycles are very fast.
- react renders UI very fast .has the best render mechanism

 

# react is good at DOM operations , DOM manipulations .



- # useEffect()- 
- runs after the component is rendered used to make api calls and such function which needs to be done after rendring 

useEffect(() => {
    fetchData();
   }, []);


- calling fetchData() for api

[]) - Dependency Array ([]): The empty array [] is the second argument to useEffect. This array determines when the effect should be re-run:

- if no dependency array useeffect is called on every render.
- If you pass an empty array, the effect runs only once, after the initial render.
- If you include variables in this array, the effect will re-run whenever any of those variables change


# confusiion about writing things inside return and outside return statement in functional component

- inside the return Statement: The UI elements (JSX) that the component renders, including dynamic data, event handlers, and conditional rendering.

- Outside the return Statement: All the logic that powers the component, including state management, side effects, helper functions, and event handlers.

This separation keeps your component organized, ensuring that the logic is handled before rendering the UI, and the UI is cleanly defined within the return statement.


# In the Search functionality -
- we are using two state variable for , list of restraunts one is used to keep it intact for the filtering and calculating purpose and the other filteredrestruant is used to modify the changes and to render that changes.
- jo bhi claculation and filter wala data listofrestraunts se utha rhe h fir usko filteredrestraunt m update krke render krdrhe h, agar same m krte to issue aata , baad m fiter nhi kr pate kyuki data modify hojata h , isliye ek ka use modify aur render krne k liye horha aur dushre ka use , data leke calculate aur filter krne k liye.


# link in react router

- we dont use anchor tag because it reloads the whole page wheras link only refreshes the component.




# Custom Hooks - firstly finalize the contract ,what it is going to take input and what output is going to give.
- it is just the utility function.
- we should optimize the code more by removing the things which are not necessary to write in the specific compnonent like in the restaurantmenu comp we can remove the api fetching code by simpling making a custom hook and passing that custom hook there.
- create custom hook in the utils folder ,
-it makes testing process very easy . jab fetch wale code  m dikkat h to custom hook m jake check kr skte h , resmenu dikkat h to uske component m sirf uski info h to wha testing asaan ho jata h , ek hi component m kafi codeds rhete h to dikkat hota h bs .


# Lazy loading - 
- in the last part of the epi 9 we are handling lazy loading , which is a very important part of handling the apps having large scale of components . 
- as we know parcel is a bundler which does a lot of job for us , one of the job is to bundle the large code files into one file , compressing all the files together.
- in the large scale application this one file gets bigger which makes application slower, its fine for our app rn because it doesnt have that much of component and all stuff, but if suppose we have the section for grocery , which had their own alot of components for different things in the grcoery section , 
- and similarly many other sections like a normal web app , we need to chunkinfy the app , we need to divide the app into smaller smaller chunks, 
its also known as dynamic bundling ,code splitting ,
in this we use lazy loading to . 
- only this way we can make big application performant , optimized.











