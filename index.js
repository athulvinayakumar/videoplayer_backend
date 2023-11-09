// import json-server library in index.js

const jsonServer = require('json-server')


// create server using json-server library
const mediaplayer = jsonServer.create()


// create path to db.json file
const router = jsonServer.router('db.json')


// middlewares to convert js to json
const middlware = jsonServer.defaults()


// connect/use middleware and router in server
mediaplayer.use(middlware)
mediaplayer.use(router)


// setup port for the server
const port =5000 || process.env.port

// to listen server for resolving request
mediaplayer.listen(port,()=>{
    console.log(`${port}`);
})