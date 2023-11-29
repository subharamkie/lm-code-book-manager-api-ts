import { Author } from "../models/author";
import { Book } from "../models/book";
import { BookReview } from "../models/bookReview";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

//User story - delete Book by Id
export const deleteBook = async (bookId: number) => {
	try {
		const result = await Book.destroy({
			where: {
				bookId,
			},
		});

		return result; // Returns the number of rows affected (0 or 1)
	} catch (error) {
		throw error;
	}
};

export const getReviews = async () => {
	return BookReview.findAll({
		include: [
			{
				model: Book,
			},
		],
	});
};
