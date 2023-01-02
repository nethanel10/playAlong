import { v4 as uuidv4 } from 'uuid';

let users = []
let rooms = []


const formatMessage = (username, message) => {username, message}

//join user to room
const userJoin = (id,username,roomId) => {
    const user = {id,username,roomId}
    users.push(user)
    //if not find room for user the server create a new room and join the user to this room 
    if(!rooms.find(room => room.id === roomId)) rooms.push({        
            id: roomId,
            type: 1,
            videoSettings: {
                play: false,
                timeline: 0,
                url: "https://www.youtube.com/watch?v=VELru-FCWDM",
            },
            chatHistory: []
    })
    return user
}

const changeRoomSettings = (roomId, updateQuery) => {
    rooms = rooms.map(room => {
        if(room.id === roomId) return {...room, ...updateQuery}
        return room
    })
}

//get current user 
function getCurrentUser(id){
    return users.find(user=>user.id===id)  
}
//users leaves chat 
function userLeave(id){
    const index = users.findIndex(user=>user.id===id)
    //if not equal negative one =>if the user with specifc index is found 
    if(index!== -1){
    return users.splice(index,1)[0]
    }
}

const getRoomById = (roomId) => {
    return rooms.find(room => room.id === roomId)
}

//get room users
function getRoomUsers(roomId){
    return users.filter(user=>user.roomId===roomId)
}
// function  that get random room ( random room is room that his type is 2 and have more than one user in the room if havent random room the server create this )
const getRandomRoom = () => {
    const randomRoom = rooms.find(room => {
        if(room.type !== 2) return false
        if(getRoomUsers(user.room.id).length !== 1) return false
        return true
    })
    if(randomRoom) return randomRoom
    const newRoom = {        
        id: uuidv4(),
        type: 2,
        videoSettings: {
            play: false,
            timeline: 0,
            url: "https://www.youtube.com/watch?v=VELru-FCWDM",
        },
        chatHistory: []
    }
    rooms.push(newRoom)
    return newRoom 
}
module.exports={
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
    getRandomRoom,
    getRoomById,
    changeRoomSettings,
    formatMessage
}