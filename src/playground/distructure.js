const book = {
    title: 'Asiap',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const {name : publisherName = 'Anjas'} = book.publisher;

console.log(publisherName)
console.log(book)