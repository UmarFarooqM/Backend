
async function asaw() {
    try {

        let  res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        // if(!data.ok) throw Error ("Error in data")
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
    
}
asaw()



fetch("https://fakestoreapi.com/products").then((res)=> console.log(res))
.catch((rej)=>{
    console.log(rej)
}).finally(()=>{
    console.log("finally fetched")
})