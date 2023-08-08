// console.log("hello")

let array1 = ['red', 'green', 'blue' , 'white']
let array2 =[ NaN, 'purple', 'saphire' , 'cream']

array1.push(...array2)
console.log(array1  , 3)


console.log(array1.indexOf('red'))
console.log(array1.indexOf('green',1))

// problem with index of--
console.log("problem with index of method ----------------------")
console.log(array2.indexOf(NaN))// showing -1 i,e. not present

let array3 = ['papaya', 'guava' , 'mango' , 'apple' , true, false]

console.log(array3.indexOf('mango', 4))

console.log(array3.includes('papaya' , 2))
console.log(array3.includes('mango' , 2))
console.log(array3.includes(!true))

console.log(array2.includes(NaN))

console.log(array3.lastIndexOf('papaya'), 'counts right to left ')

console.log(array3.lastIndexOf(false))

console.log(array3.lastIndexOf(true, 2))


console.log(array3.find((x,i)=>{ if (x = 'papaya'){
  return i
} } ))

// filter 
let items = [
  {name:'pen', price:20},
  {name:'car', price:100000},
  {name:'bike', price:70000},
  {name:'scooter', price:50000},
  {name:'book', price:600},
  {name:'bag', price:1000}
]

//filter
let filteredItems = items.filter((item)=>{return item.price < 1100})

console.log(filteredItems)

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];


//filter 
const filteredUsers = users.filter((x)=> {return x.id < 3})
console.log(filteredUsers)

//map
const mappedArray3 = array3.map(item => item.length)
console.log(mappedArray3)

//map nethod
const itemNames = items.map(item => item.name)
console.log(itemNames)

//find
let itemX = items.find((item) => {return item.name === 'book'})
console.log(itemX)

// findIndex
let  itemXIndex = items.findIndex((item,i) => {return i < 1})
console.log(itemXIndex)

// some method

let inexpensiveItems = items.some(x => {return x.price<1000})
console.log(inexpensiveItems)

let tooCheapItem = items.some(x => {return x.price < 10})
console.log(tooCheapItem)


//every method
let areAllInexpensive = items.every(x => {return x.price <1000});
console.log(areAllInexpensive)

let areAllAbove10 = items.every(x => x.price > 10)
console.log(areAllAbove10)

//sort 

let arrayToBeSorted = ['apple','banana ','cat','fish','gun','uranus','dog','golf','omen','god','rain']

arrayToBeSorted.sort()
console.log(arrayToBeSorted)


let numbers = [3,5,7,3,7,0,4,5,8,2,423,57,568,645]
numbers.sort((a,b) => {return a-b})

console.log(numbers)

numbers = [3,5,7,3,7,0,4,5,8,2,423,57,568,645]


//reverse

numbers.reverse()
console.log(numbers)

arrayToBeSorted.reverse()
console.log(arrayToBeSorted)

// split
let names = 'Bilbo,Gandalf,Nazgul';

console.log(names.split(','))

//join
let arrayToBeJoined = ['appy', 'juice', 'yo', 'no']
console.log(arrayToBeJoined.join('_'))


  //reduce

const total = items.reduce((currentTotal, item) =>{return currentTotal += item.price}, 0)
console.log(total)

const nnumbers = [15.5, 2.3, 1.1, 4.7];

let ttotal = nnumbers.reduce((z,x) => {return z += Math.round(x)}, 0)
console.log(ttotal)

  // console.log(numbers.isArray())

let army = {
  minAge: 18,
  maxAge: 27,

  canJoinArmy(candidate){
    return candidate.age>this.minAge && candidate.age<this.maxAge}
}


   let candidates = [
   {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
]

let soldiers = candidates.filter( army.canJoinArmy, army)
console.log(soldiers)


