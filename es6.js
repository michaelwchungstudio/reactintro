// ES6 JavaScript

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
