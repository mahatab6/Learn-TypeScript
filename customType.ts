type user = {
    name:string,
    age: number,
    isAdmin: boolean
} 

let userInfo = [];

let user1: user = {
    name: "mahatab",
    age: 20,
    isAdmin:true
}

userInfo.push(user1)

let user2: user = {
    name: "mithu",
    age: 25,
    isAdmin: false
}

userInfo.push(user2)

console.log(userInfo)

