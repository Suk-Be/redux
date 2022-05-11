// rename this file to index 
// to make the functional lessons work with the library modules with webpack
import { Map } from 'immutable';
import { produce } from 'immer';
import { curriedDomElem } from "./functional/currying";
import { composedJSFuncs, composedLodashFuncs, pipedLodashFuncs }from "./functional/composition";

async function functional() {
    const elem = document.getElementById('app');    
    
    // vanillaComposed
    const vanillaComposed = await composedJSFuncs;
    // elem.innerHTML = vanillaComposed;
    
    // lodash composed
    const lodashComposed = await composedLodashFuncs;
    // elem.innerHTML = composedLodashFuncs;

    // lodash piped
    const lodashPiped = await pipedLodashFuncs;
    // elem.innerHTML = lodashPiped;

    const curried = await curriedDomElem;
    elem.innerHTML = curried;


    
    /* UPDATING OBJECTS */
    console.log(' ** UPDATING OBJECTS **')

    const person = { 
        name: "John",
        address: {
            country: "United States",
            city: "San Francisco",
        }
    };

    const user = { 
        name: "John",
        address: {
            country: "United States",
            city: "San Francisco",
        }
    };

    // shallowCopy, original data can be mutated
    const shallowCopy = {...person, name: "Bob", age: 30}
    shallowCopy.address.city = "New York"

    console.log('original changed too', person)
    console.log('copy with changed nested value (shallow copy)', shallowCopy)

    // deepCopy
    const deepCopy = {
        // copy all properties
        ...user,
        // overwrite not nested property
        name: "Bob",
        address: {
            // copy all nested properties
            ...user.address,
            // create new property to replace shallow properties
            city: "New York",
        }
    }

    console.log('original object', user)
    console.log('copy with nested value (deep copy)', deepCopy)



    /* UPDATING ARRAYS */
    console.log('** UPDATING ARRAYS **')
    const numbers = [1,2,3];

    // ADDING
    const addedAfter = [...numbers, 4]
    console.log('added after', addedAfter);

    const addedBefore = [4, ...numbers]
    console.log('added before', addedBefore);

    // INSERTING 
    const insertIndex2 = numbers.indexOf(2)
    // new array declared
    const insertAtSecondPos = [
        // slice shallow copy of numbers start at 0 until 1
        ...numbers.slice(0, insertIndex2), 
        4, 
        // shallow copy of numbers start at 2
        ...numbers.slice(insertIndex2)
    ]
    // resulting in [1, 4, 2, 3]
    console.log('inserted into', insertAtSecondPos)

    // REMOVING
    const removedFrom = numbers.filter(n => n !== 2)
    console.log('remove when value 2', removedFrom)

    // UPDATING
    const updateWith = numbers.map(n => (n === 2 ? 20 : n))
    console.log('update value 2 with 20', updateWith)


    /* ENFORCING IMMUTABILITY */
    console.log('** ENFORCING IMMUTABILITY **');
    
    let book = { title: 'Harry Potter' };
    console.log('original data', book);

    function publish(book){
        // Wrong: don't mutate data
        book.isPublished = true;
    }
    publish(book)

    console.log('mutated data', book);

    // immutableJS
    console.log('// immutable')
    let fantasyBook = Map({ title: 'Fire & Ice' });

    console.log('immutable Map object gets mutated and the orginal data stays the same', fantasyBook)
    console.log('immutable get api for properties', fantasyBook.get('title'))
    console.log('immutable convert to JS object', fantasyBook.toJS())

    function publishWithImmutable(fantasyBook){
        // set api
        return fantasyBook.set('isPublished', true);
    }
    
    fantasyBook = publishWithImmutable(fantasyBook)

    console.log('immutable set api for additional properties', fantasyBook.toJS())

    // immer.js
    console.log('// immer')
    let mathBook = { title: 'algebra' };

    function publishedWithImmer(mathBook) {
        // immer works like a proxy
        // data is stored in a additional object (draftBook)
        return produce(mathBook, draftBook => {
            draftBook.isPublished = true;
        })
    }
    const updatedWithImmer = publishedWithImmer(mathBook)

    console.log('original data', mathBook)
    console.log('updated data with immer', updatedWithImmer)
}

functional()