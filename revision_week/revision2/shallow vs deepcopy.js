
// let original = {name:"alice", age:20, hobbies:['cricket',"chess"]}
// //shalllow
// let clone = {...original}

// clone.age=18

// console.log(clone)
// console.log(original)


let original = {name:"alice", hobbies:['cricket',"chess"]}

let clone= JSON.parse(JSON.stringify(original))

clone.name="umar"
console.log(clone)
console.log(original)

