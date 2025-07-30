
function isPrime(n){
    if(n==2){
        console.log(n, "is a Prime Number")
        return
    }
    if(n<2 || n!==isNaN(n)){
        console.log(n,  "is not a prime Number")
        return
    }

  
    if(n>2){
    for(let i=2;i<n-1;i++){
        if(n%i==0){
            // return false
            console.log(n ,"is not a prime Number")
            return
        }
    }
}
    console.log(n, "is a Prime Number")
    return
}

module.exports = isPrime