let num = [2,4,5,6,78]
let num2 = [1,2,3,4,5,6,78,8]
let obj = {
  rahul:23,
  monu:33,
  sonu:27,
  chad:53,
  mrz:63,
  
}
for(let i = 0; i<num.length; i++){
  console.log(num[i])
}
num2.forEach((element)=>{
  console.log(element*element)
})

let name = "ajay"
let arr = Array.from(name)
console.log(arr)
for (let i of num){
  console.log(i)
}
for(let i in num2){
  console.log(i)
  console.log(num2[i])
}
for(let a in obj){
  console.log(obj[a])
}
for(let a of num){
  console.log(a)
}
