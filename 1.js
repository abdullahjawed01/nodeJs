console.log("Hello World");


// The beggining -- 2009, Ryan Dhal's vision

/*

In 2009, a software engineer named Ryan Dahl from the US created Node.js

At the time:
Java Scipt was only used in browser 
servers were built using PHP,Python or Java
Each request on the server would create a new thread, consuming memory and slowing things down the heavy load.

Ryan found this inefficeint, especially after seeing how web broweer handled asynchronous events(non-blocking operations)

He wanted the same non-blocking behaviour on the server.
that how Node.js was born -- to bring JS to the Backend, but in a faster and more scalable way.


*/

/*
The core idea -- event-driven & NOn-blocking I/O
Ryan built Node.js using:

Google's V8 engine (the same engine that powers Chrome)
Libuv(a C linrary for asynchrounous I/O)

This comnbination allowed Node.js to:-

Handle many request at once using a single thread
Avoid blocking while waiting for task like file reading or database queroes 

In short:
Node.js introduced a SINGLE-threaded, event-driven architecture that made servers lightweight and fast.

*/



/*
Early days (2009-2011)
2009: Node.js was released at the JSConf EU confrence.
2010: npm(Node Package Manager) was introduced- the game changer.
Developers could easily install and share reusable packages. 
2011: Companies like LINKEDIN and UBER started using Node.js for their backends due to its speed and scalability.



Example:
Linkedin moved from Ruby on Rails to Node.js and saw their server handle 10X more traffic with fewer machines.
*/

/*
Rise in Popularity(2012-2015)
Node.js rapidly became the go-to choice for building
.APIs
. Real time application
. Command-line tools
. Developer utilities

Big companies joined:
. Netflix
.Paypal 
. eBay, Walmart and NASA adopted node.js in production.

However, around 2014 there was community tension -- Development was slow and contriutiors were frustrated.


*/



/*
Today's Ecosystem

The node.js ecosystem is massive:
over 2million + package on npm
Used by 200% of modern web developers 
Foundation for framework like Express.js, Faastify , and AdonisJS

Its no longer "Just JavaScript on the server"
Its the backbone of the modern web, connecting APIs, microservice, and tools.


*/


/*
Summary Timeline

year                      Event 

2009 - Ryan Dhal creates node.js
2010 - npm (Node Package Manager) is launched
2011 - LinkedIn & Uber adopt Node.js
2014 - is.js fork due to governance issues
2015  - io.js merges back -> Node.js Foundation Formed
2017+ -  Async/Await, ES modules, and major Imrpovements
2020s - Node.js becomes a global standard for web servers


*/