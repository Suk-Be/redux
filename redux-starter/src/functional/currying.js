import { pipe } from 'lodash/fp';

let input = "   JavaScript   ";
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();

// currying with higher order functions
// when piping functions only one argument is allowed
// it is the return value of the previous function
const wrap = type => str => `<${type}>${str}</${type}>`;


const resultHoF = pipe(trim, toLowerCase, wrap('span'))
// wrap('div') the result of the previous funtion returns a function with with that passd parameter
// resultHof(input) takes the previous function and applies a str parameter



export const curriedDomElem = resultHoF(input);