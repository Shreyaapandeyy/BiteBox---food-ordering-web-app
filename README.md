we dont need to push node modules to the git because if we have package.json and lockjson which we are pusing into git then we  can recreate all the packages again with it . by just writing command --- npm install

we should not put those things into git which we can regenrate.

parcel has  create a server for us and given us a port 1234 and is hoisting our app onto the server


 npm is used to install a package, npx is used to execute a package 

  when we do npx parcel index.html the parcel goes to the src index.html and build a development build for our app and it host tht dev build on localhost 1234

