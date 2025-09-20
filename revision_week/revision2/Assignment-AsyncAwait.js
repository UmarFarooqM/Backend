function fetchUser(details){
    let user = new Promise((res,rej)=>{


    setTimeout(() => {
        
        if(details){
            console.log(details)
        }
        else{
            console.log("details not found")
        }

    }, 1500);
})

user.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})



}

fetchUser(  { id: 1, name: "Jane Doe" })


function fetchPosts(userId){
    let user = new Promise((res,rej)=>{
    setTimeout(() => {
        
        if(details){
            console.log(details)
        }
        else{
            console.log("details not found")
        }

    }, 2000);
})

user.then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})
}

fetchUser( [
  { postId: 101, title: "Post One" },
  { postId: 102, title: "Post Two" }
])


async function getUserAndPosts(postsuser) {
    

    try {
        let res = await fetch(postsuser)
        let users = await res.json()
        console.log(users)
        // console.log({users.user,users.posts})
    } catch (error) {
        console.log(error)
    }
}
getUserAndPosts({
  user: { id: 1, name: "Jane Doe" },
  posts: [ {postId:101}, {postId:102} ]
}
)



console.log("All data fetched successfully")

















