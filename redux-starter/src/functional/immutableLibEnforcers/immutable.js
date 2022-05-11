import { Map } from 'immutable'
let book = Map({ title: 'Harry Potter' });



function publish(book){
    // set api
    return book.set('isPublished', true);
}

book = publish(book)


// immutable expects to you to learn a new api to access the properties of the book
// main concern is that it is hard to integrate with other libraries which expect plain JS objects
console.log(book.get('title'));
console.log('immutable toJS() to convert to JS object', book.toJS())
console.log(book)
