// map method
let arr=[1,2,3,4,5]
output=arr.map((x)=>x*2)
console.log(output)

let arr1=["hello","world"]
output=arr1.map((x)=>x.toUpperCase())
console.log(output)

// filter
let arr3=[1,2,3,4,5]
output=arr3.filter((x)=>x%2)
console.log(output)

let arr4=["hello","world","abc"]
output=arr4.filter((x)=>x.charAt(4))
console.log(output)


let arr5=["hello","world","abc"]
output=arr5.filter((x)=>x.length>4)
console.log(output)



// for each
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((x) => console.log(x));

let numbers1 = ["hello","world"];
numbers1.forEach((x) => console.log(x));


// Every
let num=[1,2,3,4,5]
output=num.every((x)=>x>0)
console.log(output)


let num2=["hellodd","worlddd"]
output=num.every((x)=>x.length>5)
console.log(output)


// some
let num5=[1,2,3,4,5]
output=num5.some((x)=>x%2==0)
console.log(output)


let num1=["hello","world","max"]
output=num1.some((x)=>x.includes("x"))
console.log(output)


// find
let num6=[1,2,3,4,5]
output=num6.find((x)=>x%2==0)
console.log(output)

let num7=["hello","world","max"]
output=num7.find((x)=>x.includes("x"))
console.log(output)

// find index of
let num8=[1,2,3,4,5]
output=num8.findIndex((x)=>x%2==0)
console.log(output)


let num9=["hello","world","max"]
output=num9.findIndex((x)=>x.includes("x"))
console.log(output)






