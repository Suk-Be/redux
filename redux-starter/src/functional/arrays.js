/* UPDATING ARRAYS */
const numbers = [1,2,3];

// ADDING
const added = [...numbers, 4]
console.log(added)

// adding numbers at certain position
const index2 = numbers.indexOf(2)
const addedSecondPos = [
    // slice copies new shallow array (beginning at 0 pos until pos 2) and spreads the pos into this array 
    // => value at pos 1 = 1
    ...numbers.slice(0, index2), 
    // adds 4 into next pos
    4, 
    // copies new shallow array beginning at 2 pos until end and spreads the pos into this array => 2, 3
    ...numbers.slice(index2)
]
// resulting in [1, 4, 2, 3]
console.log(addedSecondPos)

// REMOVING
const removed2 = numbers.filter(n => n !== 2)
console.log(removed2)

// UPDATING
// replace 2 with 20
const updated2with20 = numbers.map(n => (n === 2 ? 20 : n))
console.log(updated2with20)
