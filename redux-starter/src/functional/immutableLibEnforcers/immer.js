import { produce } from 'immer'
let book = { title: 'algebra' };

function publish(book) {
    // immer works like a proxy
    // data is stored in a additional object (draftBook)
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated = publish(book)

console.log(book)
console.log(updated)
