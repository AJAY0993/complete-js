let user = new Object ;
user ={};

user = {
name:'jimmy',
age:55
}

alert(user.name)
alert(user.age)

user.isAdmin = true

console.log(user['isAdmin'])

console.log(user)
console.table(user)

delete user.age
delete user['name']
console.log(user)

// function makeUser(name,age){
//  return{
//   name:name,
//   age:age
//  };
// }

function makeUser(name,age){
  return {
    name,
    age
  }
}
user = makeUser('name', 78)
console.log(user)


let obj = {
  name:'jimmy',
  passion:'eat',
  age:52
}

let obj2 = {
  eat: () => console.log("lets go to restaurant")
}

let obj3 = {
  dance: () => console.log(' 1 2 3 4 get on the dance floor')
}
obj.__proto__ = obj2
obj.eat()
obj.__proto__ = obj3
obj.dance()


console.log('dance' in obj3)
console.log('bath' in obj3)
console.log('eat' in obj3)
console.log('name' in user)


for(let i in user){
  console.log(user[i])
}
//tasks

 obj = {}

obj.name = 'John'
obj.surname = 'Smith'
obj.name = 'Pete'
delete obj.name
console.log(obj)

const isEmpty = obj => obj === {}? true :false
let myObject = {}
console.log(isEmpty(myObject))

//task2 
console.log('task2')
let emptyObj= {}
function checkEmptiness(){
for(let i in obj){
  return false
}
  return true
}

console.log(checkEmptiness(emptyObj))
// task3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function totalOfSalaries (obj){
  let sum = 0
for(let i in obj){
  sum += obj[i]
}
  return sum
}

console.log(totalOfSalaries(salaries))

// task4

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multipliedBy2(obj){
  for(let i in obj){
    if (typeof obj[i] == 'number'){
      obj[i]*2
    }
  }
}

multipliedBy2(menu)
console.table(menu)


let myObj = {
  prop1:'value1',
  prop2:'value2',
  prop3:'value3',
}

let copiedObj = myObj

myObj.prop4 = 'value4'

console.table(copiedObj)


let sampleObj1 = {
  name:'rahul',
  class:12,
  section:'c'
}
let sampleObj2 = sampleObj1

sampleObj2.name = 'vikram'

console.table(sampleObj1)


let sampleObj3 ={}

for(let i in sampleObj1){
  sampleObj3[i] = sampleObj1[i]
}


sampleObj3.name = 'sunil'

console.table(sampleObj3)
console.table(sampleObj1)
