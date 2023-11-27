import { NextFunction, Request, Response } from "express";
import * as bookService from "../services/books";

export const getBooks = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const books = await bookService.getBooks();
		res.json(books).status(200);
	} catch (err) {
		next(err);
	}
};

export const getBook = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const bookId = req.params.bookId;
	if (!bookId) {
		return next(new Error("Id is required!"));
	}
	try {
		const book = await bookService.getBook(Number(bookId));
		if (!book) {
			return next(new Error("Book with the id was not found!"));
		} else {
			res.json(book).status(200);
		}
	} catch (err) {
		res.status(404).json("Not found");
		next(err);
	} /*
	if (book) {
		res.json(book).status(200);
	} else {
		res.status(404).json("Not found");
	}*/
};

export const saveBook = async (req: Request, res: Response) => {
	const bookToBeSaved = req.body;
	try {
		const book = await bookService.saveBook(bookToBeSaved);
		res.status(201).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (req: Request, res: Response) => {
	const bookUpdateData = req.body;
	const bookId = Number.parseInt(req.params.bookId);

	const book = await bookService.updateBook(bookId, bookUpdateData);
	res.status(204).json(book);
};

//User story - Delete Book by Id
export const deleteBook = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const bookId = Number.parseInt(req.params.bookId);
	try {
		const book = await bookService.deleteBook(bookId);

		if (book) {
			res.json(book).status(200);
		} else {
			res.status(404).json("Book was not found");
		}
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};
