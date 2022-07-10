import { Author } from './author';
import { Book } from './book';

export interface DB {
    authors: Author[];
    books: Book[];
}