a=[1,[],4,7,[],2,6,[]]
i=0
b=[]
while(i<a.length){
    if (Array.isArray(a[i])){
        a.splice(i,1)
    }
    i++
}
console.log(a) 