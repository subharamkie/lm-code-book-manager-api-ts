import { Book } from "../models/book";

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
