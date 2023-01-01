import express from 'express'
import './db/index.js'
import usersRoute from './routes/users.js'

//create a server
const server = express()

//utils middlewares
server.use(express.json())
server.use(express.urlencoded())

//routes
server.use('/users', usersRoute)

server.listen(5000, (err) => {
    if(err) return console.error(err)
    return console.log(`server is running on port 5000`)
})