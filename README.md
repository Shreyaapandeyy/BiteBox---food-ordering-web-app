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

# react is good at DOM operations , DOM manipulations .



- # useEffect()














