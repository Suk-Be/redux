let book = { title: 'Harry Potter' };

function publish(book){
    // Wrong: don't mutate data
    book.isPublished = true;
}

publish(book)

console.log(book);