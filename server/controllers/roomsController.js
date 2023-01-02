import { io } from "..";
import { formatMessage, changeRoomSettings, getRoomById, userJoin, userLeave } from "../utils/roomUtils.js";

const botName = "PlayAlong"

io.on('connection',socket=>{

    //handle room join
    socket.on('joinRoom',({username,roomId, type})=>{
        let user
        if(type === 2) user = userJoin(socket.id, username, getRandomRoom())//if the user chose random room(if the type of room is 2 ) so the user join to random room 
        else user = userJoin(socket.id,username,roomId)//else if the user chose room with freind(if the type of room is  1)the user join to room with freind 
        socket.join(user.roomId) //join user  to room that he want 

    //welcome user 
    socket.emit('message',formatMessage(botName,'welcome to the room'))

    //get room info
    socket.emit("changeRoomSettings", getRoomById(user.roomId))

    // Broadcast =expectant when a user connects
    socket.broadcast.to(user.roomId).emit('message',formatMessage(botName, `${user.username} has joined the room`)) //send this message to specfic room
    //send user and room info
    io.to(user.roomId).emit('updateRoomUsers',{
        users: getRoomUsers(user.roomId)
    })
    })

    socket.on("message", ({username, message}) => {
        io.to(user.roomId).emit("message", {username, message})
        changeRoomSettings(user.roomId, {
            chatHistory: [
                ...getRoomById(user.roomId).chatHistory, {
                    username, message
                }
            ]
        })
    })

    socket.on("changeRoomSettings", (roomId, changeQuery) => {
        changeRoomSettings(roomId, changeQuery)
        io.to(roomId).emit("changeRoomSettings", getRoomById(roomId))
    })
//* handel user disconnect  the function userleave   is run and if have a users in the room  the server emit message that the user left chat 
    socket.on('disconnect',()=>{
        const user = userLeave(socket.id)
        if(user){
            io.to(user.roomId).emit('message',formatMessage(botName,`${user.username} has left the chat`))// server send message   that user is leave chat 
            //server send the users that remainded in the room   and room info 
            io.to(user.roomId).emit('roomUsers',{
                users:getRoomUsers(user.roomId)
            })
        }
    })

})

