
function factorial(n){
   
    if(n<0){
        console.log(`${n} factorial is not defined for negative Numbers`)
        retur}
    if(isNaN(n) || n==""){
        console.log(`${n} is not a Number`)
    return
    }
    let fact=1
    for(let i=n;i>=1;i--){
        fact =  fact * i
    }
    console.log(`Factorial of ${n} is : ${fact}`)
}

module.exports = factorial