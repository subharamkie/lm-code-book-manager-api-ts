import { Book } from "../models/book";
import { Author } from "../models/author";
import { Publisher } from "../models/publisher";
import { BookReview } from "../models/bookReview";

export const populateDummyData = async () => {
	// Populate environment with some dummy data in dev
	console.log("🍼 Populating database with dummy data");
	await Publisher.sync({ force: true });

	await Publisher.create({
		publisherId: 1,
		name: "Faber & Faber",
	});

	await Publisher.create({
		publisherId: 2,
		name: "Penguin Random House",
	});
	await Book.sync({ force: true });
	await Book.create({
		bookId: 1,
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		description: "Someone finds a nice piece of jewellery while on holiday.",
	});
	await Book.create({
		bookId: 2,
		title: "The Shop Before Life",
		author: "Neil Hughes",
		description:
			"Before being born, each person must visit the magical Shop Before Life, where they choose what kind of person they will become down on Earth...",
	});

	await Author.sync({ force: true });

	await Author.create({
		authorId: 1,
		firstName: "Tolkein",
		lastName: "J.R.R",
		publisherId: 1,
		bookId: 1,
	});

	await Author.create({
		authorId: 2,
		firstName: "Neil",
		lastName: "Hughes",
		publisherId: 2,
		bookId: 2,
	});
	await BookReview.sync({ force: true });

	await BookReview.create({
		reviewId: 1,
		bookId: 1,
		authorId: 1,
		rating: 5,
		comments:
			"A wonderfully satisfying fantasy adventure that not only connects to the previous films, but charts its own ground with great effectiveness.",
	});
	const bookCount = (await Book.findAll()).length;
	console.log(
		`📚 ${bookCount} book${bookCount !== 1 ? "s" : ""} added to table`
	);
};
