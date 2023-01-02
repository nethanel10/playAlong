import express from 'express'
import './db/index.js'
import usersRoute from './routes/users.js'
import { Server } from 'socket.io'
import { createServer } from 'http'

//create a server
const server = express()
const httpServer = createServer(server);

//initialize socket.io server
export const io = new Server(httpServer, {});

//utils middlewares
server.use(express.json())
server.use(express.urlencoded())

//routes
server.use('/users', usersRoute)

//listen to port 5000
httpServer.listen(5000, (err) => {
    if(err) return console.error(err)
    return console.log(`server is running on port 5000`)
})
