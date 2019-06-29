// ES6/ES7 JavaScript

// * let & const
let - variable values, similar to var
const - constant values, will not receive new values

// Arrow Functions
const myFnc = () => {
  ...
}

const multiply = number => number * 2;

// * Exports & Imports (Modules)
File 1: person.js
export default person

File 2: utility.js
export const clean = () => {...}
export const baseData = 10;

File 3: app.js
// imports default, can name anything
import person from './person.js'
import prs from './person.js'

// imports explicitly named exports (uses curly braces)
import { baseData as startData } from './utility.js'
import { clean } from './utility.js'

// import everything
import * as bundled from './utility.js'
ex. bundled.baseData, bundled.clean

// * Classes
// Person class inherits properties and methods from Human
// Remember the super() if using a constructor in the extending class!
class Human {
  constructor() {
    this.gender = 'female';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Michael';
  gender = 'male';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();

// * Spread & Rest Operators
Spread - used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp: 5}

Rest - used to merge a list of function arguments into an array
// unlimited arguments that will be merged into an array that can be used in the function
function sortArts(...args) {
  return args.sort()
}

const filter = (...args) => {
  return args.filter(el => el === 1);
}

// * Destructuring
// extract array elements or object properties and store them in variables
Array Destructuring
[a, b] = ['Hello', 'Michael']
console.log(a) // Hello
console.log(b) // Michael

const numbers = [1, 2, 3]
[num1, , num3] = numbers;
console.log(num1, num3); // 1, 3

Object Destructuring
{name} = {name: 'Michael', age: 26}
console.log(name) // Michael
console.log(age) // undefined

// * Reference & Primitive Types
Primitive types
// numbers, strings, booleans -> reassignment will COPY the value
const num1 = 1;
const num2 = num2;

Reference types
// objects, arrays -> reassignment utilizes a POINTER to the original
// ex. changing person below will affect secondPerson
const person = {
  name: 'Michael'
}

const secondPerson = person;

// below will COPY using spread operators!
const secondPerson = {
  ...person
}


























//
