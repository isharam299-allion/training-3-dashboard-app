import { useEffect, useState } from "react"
import { ALL_BOOKS, Book } from "../utilities/Book.data"

const useBookSearch = (query: string) => {
    
    const [filteredBooks , setFilteredBooks] = useState<Book[]>(ALL_BOOKS);

    useEffect(() => {
        if(!query){
            setFilteredBooks([]);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const searchBooks = ALL_BOOKS.filter(book => 
            book.title.toLowerCase().includes(lowerCaseQuery) || 
            (book.author && book.author.name.toLowerCase().includes(lowerCaseQuery))
        )
        setFilteredBooks(searchBooks);
    },[query]);

    return filteredBooks;
}

export {
    useBookSearch
}