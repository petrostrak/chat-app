const  users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // calidate the data
    if(!username || !room){
        return {
            error: 'Username and room is required!'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = {id, username, room}
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => { // user.id === id)
        return user.id === id
    })

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

addUser({
    id:12,
    username: 'petros',
    room: 'plebs'
})

console.log(users);

const removedUser = removeUser(12)

console.log(removedUser);
console.log(users);
