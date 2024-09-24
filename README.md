

# setting up testing in our app

- install react testing library
-install jest 
- install babel dependencies
- configure babel
- configure parcel .rc (config file ) to disable default babel transpilation.
- jest configuration - npx jest --init
- install jsdom library
- install @babel/preset-react - to make JSX work in test cases
- include @babel/preset-react inside my babel  config
- npm install -D @testing-library/jest-dom

# conflict bw parcel and babel.
- parcel has its own babel config, and now we have configured babel acc to us .
- so parcel config will conflict with this babel config.
- so we have to change the parcel behaviour to use babel with jest.


# test and it is the same thing we can use any of the both name.








