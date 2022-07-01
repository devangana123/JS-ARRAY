var array=[1,2,3,4,5,6,7,8,9,7]
var i=0
sum=0
prod=1
while (i<array.length){
    if (i<5){
        sum+=array[i]
    }
    else{
        prod*=array[i]
    }
    i++
}
console.log("sum",sum)
console.log("product",prod)