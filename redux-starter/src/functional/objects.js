/* UPDATING OBJECTS */

// Mutable data, what we do not want
const person = { 
    name: "John",
    address: {
        country: "United States",
        city: "San Francisco",
    }
};
// destructuring or Object.assign create shallow copies
// nested objects like address are referenced so changing the value in a nested Object gets changed in all copied objects
// be careful when storing and creating new objects by copying from existing objects
const shallowCopy = {...person, name: "Bob", age: 30}
// no deep copy
shallowCopy.address.city = "New York"

console.log('original changed too', person)
console.log('copy with changed nested value (shallow copy)', shallowCopy)


// Immutable data, what we want
const user = { 
    name: "John",
    address: {
        country: "United States",
        city: "San Francisco",
    }
};

const deepCopy = {
    // copy all properties
    ...user,
    // overwrite property (not nested ok)
    name: "Bob",
    address: {
        // copy all nested properties
        ...user.address,
        // create new property to replace shallow property
        city: "New York",
    }
}

console.log('original object', user)
console.log('copy with nested value (deep copy)', deepCopy)