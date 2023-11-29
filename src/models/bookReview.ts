import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";
import { Author } from "./author";
import { Book } from "./book";

export class BookReview extends Model<
	InferAttributes<BookReview>,
	InferCreationAttributes<BookReview>
> {
	declare reviewId: CreationOptional<number>;
	declare comments: string;
	declare bookId: number;
	declare authorId: number;
	declare rating: number;
}
BookReview.init(
	{
		reviewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		comments: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		bookId: {
			type: DataTypes.INTEGER,
			references: {
				model: Book,
				key: "bookId",
			},
		},
		authorId: {
			type: DataTypes.INTEGER,
			references: {
				model: Author,
				key: "authorId",
			},
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		modelName: "BookReview",
		timestamps: false,
		sequelize: sequelize,
	}
);
BookReview.belongsTo(Book, { foreignKey: "bookId" });
BookReview.belongsTo(Author, { foreignKey: "authorId" });
