import { Book } from './book.js'
import { books } from './book-collection.js'

function findSuitableBook (
    genre: string, 
    pageLimit: number,
    multipleRecommendations = true
    ): Book| Book[] {
        const findAlgorithm = (book: Book) => {
            return book.genre === genre && book.pageAmount <= pageLimit
        }

        if(multipleRecommendations) {
            return books.filter(findAlgorithm)
        } else {
            return books.filter(findAlgorithm)
        }
    
}

const recommendedBook = findSuitableBook('history', 1000);

if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name)
} else {
    console.log(recommendedBook[0].name)
}


