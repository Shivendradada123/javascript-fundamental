// const student = {

// fullName: "Shivendra",
// loginCount: 8,
// signedIn: true,


// getUserData: function(){
//     console.log(`Name: ${this.fullName}`)
// }



// }

// // console.log(student.loginCount)
// console.log(student.getUserData())


function User(username, loginCount, isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn
// return this

};

const user1 = new User("shivendra", 23,5);
const user2 =new  User("Aditya", 23,56);
console.log(user1)
console.log(user2)