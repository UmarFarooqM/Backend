let apicall = new Promise((res,rej)=>{

    let obj= { id: 1, name: "John Doe", role: "Admin" }

    setTimeout(()=>{

        if(obj){
            res(obj)
        }
        else{
            rej("Failed to fetch user data")
        }
    }, 2000)
})


apicall.then((res)=>{
    console.log("resolve", res)
}).catch((rej)=>{
    console.log("reject", rej)
}).finally(()=>{
    console.log("Fetch attempt complete")
})