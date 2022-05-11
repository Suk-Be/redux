import { compose, pipe } from 'lodash/fp';

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// // compose vanilla
const result = toLowerCase(wrapInDiv(trim(input)));
export const composedJSFuncs = result;

// compose from lodash
const resultCompose = compose(toLowerCase, wrapInDiv, trim);
export const composedLodashFuncs = resultCompose(input);

// pipe from lodash
const resultPipe = pipe(trim, toLowerCase, wrapInDiv);
export const pipedLodashFuncs = resultPipe(input);
